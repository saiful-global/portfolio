import Header from "@/components/Header";
import "./globals.css";
import { Gabriela } from 'next/font/google'
import Footer from "@/components/Footer";

const gabriela = Gabriela({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: "Saiful Portfolio",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${gabriela.className}`} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
