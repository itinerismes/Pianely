import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HorizontalNav } from "@/components/ui/HorizontalNav";
import { AuthProvider } from "@/components/providers/AuthProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${inter.variable} font-sans antialiased`}
      >
        <AuthProvider>
          <HorizontalNav />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
