import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Estefania Velasco | Makeup profesional",
  description:
    "Maquillaje profesional para eventos, novias, sesiones y ocasiones especiales.",
  keywords: [
    "maquillaje profesional",
    "makeup artist",
    "maquillaje novias",
    "maquillaje social",
    "maquillaje editorial",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}