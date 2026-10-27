import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Aryan Patel — Direct Inquiries & Social Hubs",
  description:
    "Get in touch with Aryan Patel for machine learning development collaborations, full-stack software inquiries, photography assignments, or gaming partnerships.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Aryan Patel — Direct Inquiries & Social Hubs",
    description:
      "Get in touch with Aryan Patel for software development collaborations, photography assignments, or professional opportunities.",
    url: "/contact",
  },
  twitter: {
    card: "summary",
    title: "Contact Aryan Patel | Developer & Photographer",
    description:
      "Get in touch with Aryan Patel for software development or photography assignments.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
