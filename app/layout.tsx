import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { HorizontalNav } from "@/components/ui/HorizontalNav";
import { AuthProvider } from "@/components/providers/AuthProvider";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
        className={`${jakarta.variable} font-sans antialiased`}
      >
        <AuthProvider>
          <HorizontalNav />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
