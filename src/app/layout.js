import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-sky-50 text-white`}>
        <div className="absolute h-max w-full bg-sky-500 py-2">
          <Link className="mx-2 text-lg hover:text-sky-200 " href={"/"}>Home</Link>
          <Link className="mx-2 text-lg hover:text-sky-200" href={"/productos"}>Products</Link>
        </div>

        {children}
      </body>
    </html>
  );
}
