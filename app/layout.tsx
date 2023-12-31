import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";

import ClientOnly from "./components/reusable/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import AuthProvider from "./providers/AuthProvider";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata: Metadata = {
  title: "Carallel",
  description: "Caregivers are a hidden force.",
};

const playfairDisplayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const nunitoFont = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunitoFont.variable} ${playfairDisplayFont.variable}`}
    >
      <body>
        <AuthProvider>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <div className="pb-20">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
