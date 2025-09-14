import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coded by Piotr | WU R3 Receiver 4.0",
  description: "Coded by Piotr | WU R3 Receiver 4.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
              <div className="w-full h-8 bg-black flex items-center justify-center">
        <p className="text-yellow-400 text-sm font-medium uppercase tracking-wide">This is concept presentation only</p>
      </div>
        <Navbar />

        {children}
        
        <Footer />
      </body>
    </html>
  );
}
