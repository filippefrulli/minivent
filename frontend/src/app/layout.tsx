import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export const metadata: Metadata = {
  title: "Minivent",
  description: "Local events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}