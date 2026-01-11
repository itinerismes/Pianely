import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

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
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
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
