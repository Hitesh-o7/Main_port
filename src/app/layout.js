import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Created by me(Hitesh)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
