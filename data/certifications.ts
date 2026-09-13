export interface Certification {
  name: string;
  issuer: string;
  date: string; // [Month, Year]
  credentialId?: string;
  verifyUrl?: string;
  category: "AI / ML" | "Generative AI" | "Python" | "SQL" | "Web Development";
}

// Replace with real certifications — do not display until confirmed.
export const certifications: Certification[] = [
  {
    name: "[Certification Name]",
    issuer: "[Issuing Organization]",
    date: "[Month, Year]",
    credentialId: undefined,
    verifyUrl: undefined,
    category: "AI / ML",
  },
];
