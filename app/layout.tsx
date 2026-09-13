import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://gunjansharma.dev"; // [Your Portfolio URL]
const title = "Gunjan Sharma | AI/ML Developer Portfolio";
const description =
  "Portfolio of Gunjan Sharma — AI/ML student and developer building practical applications with Machine Learning, Generative AI, RAG, and modern web technologies.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Gunjan Sharma",
    "AI/ML Developer",
    "Machine Learning",
    "Generative AI",
    "RAG",
    "Portfolio",
  ],
  authors: [{ name: "Gunjan Sharma" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Gunjan Sharma Portfolio",
    images: [{ url: "/images/og-cover.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-cover.png"],
  },
};

// Runs before hydration so the correct theme class is set with no flash.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (stored === 'system' || !stored)
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : 'dark';
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
