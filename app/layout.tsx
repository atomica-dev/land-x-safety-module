import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Insurance Safety Module",
  description: "Insurance Safety Module powered by Atomica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://sdk.atomica.org/rm-widget.js" defer />
        <link rel="stylesheet" href="https://sdk.atomica.org/rm-widget.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
