import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spyene",
  description:
    "Get sustainable solar and electrical services for residential, commercial, and industrial spaces provided by expert, licensed electricians across NSW",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
