import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Hair Salon",
  description:
    "Discover the affordable and competitive pricing options for our top-notch haircare services at Hair Salon. Unleash your style potential without compromising on quality.",

  authors: {
    name: "Ivo Mujo",
    url: "https://github.com/imujo",
  },
  keywords: [
    "haircare pricing",
    "affordable salon services",
    "competitive rates",
    "cost-effective options",
  ],
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
