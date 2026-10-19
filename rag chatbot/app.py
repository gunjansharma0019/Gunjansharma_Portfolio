
import streamlit as st
import requests
import numpy as np

from pypdf import PdfReader
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity


# -------------------- CONFIGURATION --------------------

OLLAMA_URL = "http://localhost:11434/api/generate"
OLLAMA_MODEL = "qwen2.5:3b"

st.set_page_config(
    page_title="RAG Chatbot",
    page_icon="🤖",
    layout="wide"
)

st.title("🤖 RAG Chatbot")
st.write("Upload a PDF and ask questions about its content.")


# -------------------- SESSION STATE --------------------

if "chat_history" not in st.session_state:
    st.session_state.chat_history = []


# -------------------- EMBEDDING MODEL --------------------

@st.cache_resource
def load_model():
    return SentenceTransformer("all-MiniLM-L6-v2")


# -------------------- TEXT CHUNKING --------------------

def split_text(pages_text, chunk_size=700, overlap=100):
    chunks = []

    for page in pages_text:
        page_text = page["text"]
        page_number = page["page"]
        start = 0

        while start < len(page_text):
            chunk_text = page_text[
                start:start + chunk_size
            ].strip()

            if chunk_text:
                chunks.append({
                    "text": chunk_text,
                    "page": page_number
                })

            start += chunk_size - overlap

    return chunks


# -------------------- AI ANSWER GENERATION --------------------

def generate_answer(question, context):
    prompt = f"""You are a helpful PDF question-answering assistant.

Answer the user's question using the provided PDF context.
Be clear, accurate, and easy to understand.
Do not invent facts.
If the context does not contain the answer, say that
the PDF does not provide enough information.

The context contains PDF page labels. Use the relevant
information to answer the question.

PDF CONTEXT:
{context}

USER QUESTION:
{question}

ANSWER:
"""

    response = requests.post(
        OLLAMA_URL,
        json={
            "model": OLLAMA_MODEL,
            "prompt": prompt,
            "stream": False
        },
        timeout=180
    )

    response.raise_for_status()

    return response.json()["response"].strip()


# -------------------- PDF UPLOAD --------------------

uploaded_file = st.file_uploader(
    "Upload your PDF",
    type=["pdf"]
)

if uploaded_file is not None:

    try:
        reader = PdfReader(uploaded_file)

        pages_text = []

        # Extract text page by page
        for page_number, page in enumerate(
            reader.pages, start=1
        ):
            page_text = page.extract_text() or ""

            if page_text.strip():
                pages_text.append({
                    "page": page_number,
                    "text": page_text
                })

        if not pages_text:
            st.error(
                "No readable text found in this PDF. "
                "The PDF may contain scanned images."
            )
            st.stop()

        # Create chunks while preserving page numbers
        chunks = split_text(pages_text)

        if not chunks:
            st.error("Could not create text chunks from this PDF.")
            st.stop()

        # Generate embeddings
        with st.spinner("Processing PDF..."):
            model = load_model()

            chunk_texts = [
                chunk["text"] for chunk in chunks
            ]

            embeddings = model.encode(chunk_texts)

        st.success(
            f"PDF processed! {len(chunks)} text chunks created."
        )

        # -------------------- ASK QUESTION --------------------

        with st.form("question_form"):
            question = st.text_input(
                "Ask a question about your PDF"
            )

            submitted = st.form_submit_button("Get Answer")

        if submitted:

            if not question.strip():
                st.warning("Please enter a question.")

            else:
                # Find relevant chunks
                with st.spinner(
                    "Searching for relevant information..."
                ):
                    question_embedding = model.encode(
                        [question]
                    )

                    scores = cosine_similarity(
                        question_embedding,
                        embeddings
                    )[0]

                    top_indices = np.argsort(
                        scores
                    )[-3:][::-1]

                    # Build context with original PDF page numbers
                    context = "\n\n".join(
                        f"[PDF Page {chunks[i]['page']}]\n"
                        f"{chunks[i]['text']}"
                        for i in top_indices
                    )

                    source_pages = sorted({
                        chunks[i]["page"]
                        for i in top_indices
                    })

                # Generate answer using Ollama
                try:
                    with st.spinner(
                        "Qwen is generating your answer..."
                    ):
                        answer = generate_answer(
                            question,
                            context
                        )

                    st.subheader("🤖 AI Answer")
                    st.write(answer)

                    st.caption(
                        "Source PDF pages: "
                        + ", ".join(
                            str(page) for page in source_pages
                        )
                    )

                    with st.expander(
                        "View relevant PDF text"
                    ):
                        st.write(context)

                    # Save question, answer, and sources
                    st.session_state.chat_history.append({
                        "question": question,
                        "answer": answer,
                        "source_pages": source_pages
                    })

                except requests.exceptions.ConnectionError:
                    st.error(
                        "Ollama is not running. "
                        "Please open Ollama and try again."
                    )

                except requests.exceptions.Timeout:
                    st.error(
                        "The AI took too long to respond. "
                        "Please try again."
                    )

                except requests.exceptions.RequestException as error:
                    st.error(
                        f"Could not get an answer from Ollama: {error}"
                    )

    except Exception as error:
        st.error(f"Could not process the PDF: {error}")


# -------------------- CHAT HISTORY --------------------

if st.session_state.chat_history:

    st.divider()
    st.subheader("💬 Conversation")

    for chat in st.session_state.chat_history:

        with st.chat_message("user"):
            st.write(chat["question"])

        with st.chat_message("assistant", avatar="🤖"):
            st.write(chat["answer"])

            # Show source pages in previous answers too
            if chat.get("source_pages"):
                st.caption(
                    "Source PDF pages: "
                    + ", ".join(
                        str(page)
                        for page in chat["source_pages"]
                    )
                )


# -------------------- CLEAR CHAT --------------------

if st.session_state.chat_history:
    if st.button("🗑️ Clear Chat"):
        st.session_state.chat_history = []
        st.rerun()

