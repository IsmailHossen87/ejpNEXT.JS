import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { AuthProvider } from "./authprovider/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} container  mx-auto antialiased`}
      >
        <div className="border-b-2 ">
          <div className="">
            <p className="text-xl font-bold">Practice NextJs</p>
            <p>Fade Data</p>
          </div>
          <Navbar></Navbar>
        </div>
       <AuthProvider>
       <main className="min-h-screen"> {children}</main>
       </AuthProvider>
      </body>
    </html>
  );
}
