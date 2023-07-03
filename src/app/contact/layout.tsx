import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Hair Salon",
  description:
    "Reach out to Hair Salon for any questions, appointments, or inquiries about our exceptional haircare services. We are here to provide you with the best salon experience.",
  authors: {
    name: "Ivo Mujo",
    url: "https://github.com/imujo",
  },
  keywords: [
    "salon inquiries",
    "appointment booking",
    "contact information",
    "haircare consultations",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
