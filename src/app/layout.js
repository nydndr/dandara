import { Manrope, Inconsolata } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  weights: ["400", "700"],
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  weights: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Dandara",
    default: "Dandara - Product Designer"
  },
  description: "Dandara website and portfolio.",
  applicationName: "Dandara Website",
  keywords: ["Dandara", "Product Design Portfolio", "Portfolio", "Product Designer", "UX Design", "UX Designer", "Design Engineer"],
  authors: [{ name: "Dandara", url: "https://dandara.vercel.app" }],
  creator: "Dandara",
  publisher: "Dandara",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inconsolata.variable} antialiased mx-8`}
      >
        {children}
      </body>
    </html>
  );
}
