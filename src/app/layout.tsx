import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - Hair Salon",
  description: "Home page of a hair salon app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="w-full flex flex-col items-center">
        <main className="max-w-6xl w-full px-14">
          <Nav page="/" />
          {children}
        </main>
      </body>
    </html>
  );
}
