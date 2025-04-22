import "./globals.css";
import NavBar from "@/Modules/NavBar";
import { Suspense } from "react";
export const metadata = {
  title: "Shri Salasar Tractors",
  description: "Digital platform for Shri Salasar Tractors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
  rel="icon"
  href="/favicon.svg"
/>
      </head>
      <body
        className={`antialiased`}
      >
        <Suspense>
        <NavBar></NavBar>
        {children}
        </Suspense>
      </body>
    </html>
  );
}
