import "./globals.css";
import NavBar from "@/Modules/NavBar";

export const metadata = {
  title: "Shri Salasar Tractors",
  description: "Digital platform for Shri Salasar Tractors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`antialiased`}
      >
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
