import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const jos = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App - BlarQ",
  description: "Organize effortlessly with our sleek todo app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jos.className} >

        {children}
        
      </body>
    </html>
  );
}
