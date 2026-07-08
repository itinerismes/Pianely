import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${fraunces.variable} font-sans antialiased scene-canvas`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
