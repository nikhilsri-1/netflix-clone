"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import NetflixIntro from "@/app/component/netflix/NetflixIntro"; 
import Header from "@/app/component/header/header";
import Footer from "@/app/component/footer/footer"; // Make sure you have a Footer component\
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isIntroPlaying, setIsIntroPlaying] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap");
    }

    const timer = setTimeout(() => {
      setIsIntroPlaying(false);
    }, 3500); // 4 seconds for intro duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {isIntroPlaying ? (
          <NetflixIntro />
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
