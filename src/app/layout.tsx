import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar"; // Adjust the import path as needed
import Footer from "./components/footer"; // Adjust the import path as needed
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tunisia Best Electronic Solution",
  description: "TBES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap the entire layout in a flex container */}
        <div className="flex flex-col min-h-screen bg-gray-900">
          <Navbar />
          <main className="flex-grow">{children}</main> {/* This makes the main content grow */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
