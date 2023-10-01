import "./globals.css";

import manifest from "./manifest";
const manifestData = manifest();

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "",
  description: manifestData.description,
  keywords: manifestData.keywords,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" dir="ltr">
      <body
        className={`${inter.className} h-screen flex itesms-center flex-col gap-2.5`}
      >
        {children}
      </body>
    </html>
  );
}
