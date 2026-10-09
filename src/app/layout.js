import Header from "@/components/Header";
import "./globals.css";
import { Gabriela, Cormorant_Garamond } from "next/font/google";
import Footer from "@/components/Footer";

const gabriela = Gabriela({
  subsets: ['latin'],
  weight: '400',
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata = {
  title: "Saiful Portfolio",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${gabriela.className} ${cormorant.variable} bg-black text-white`} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
