import "./globals.css";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar"; // Importa o componente Navbar

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SAUP",
  description: "Sistema de automação predial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar /> {/* Usa o componente Navbar aqui */}
        {children}
      </body>
    </html>
  );
}
