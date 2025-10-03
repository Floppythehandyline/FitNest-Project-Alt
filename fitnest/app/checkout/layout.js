import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitNest",
  description: "Build up your Fit",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="__variable_5cfdac __variable_9a8899 antialiased"
      >
        {children}
      </body>
    </html>
  );
}