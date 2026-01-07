import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/ui/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pianely - Tes premiers morceaux, simplement",
  description: "Apprends le piano facilement, sans lire la musique au départ. Méthode progressive pour grands débutants. Joue tes premiers morceaux en quelques semaines.",
  keywords: ["piano", "apprendre piano", "cours piano débutant", "piano en ligne", "apprendre musique"],
  authors: [{ name: "Pianely" }],
  openGraph: {
    title: "Pianely - Tes premiers morceaux, simplement",
    description: "Apprends le piano facilement, sans lire la musique au départ.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar />
        <div className="lg:ml-72">
          {children}
        </div>
      </body>
    </html>
  );
}
