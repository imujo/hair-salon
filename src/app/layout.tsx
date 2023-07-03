import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { cn } from "@/utils/functions";

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
    <html lang="en" className={cn(inter.className, "")}>
      <body className="relative flex  min-h-screen w-full flex-col items-center ">
        <Nav />
        <main className="mb-28 mt-14 w-full max-w-6xl  px-4 md:px-14 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
