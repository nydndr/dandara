import Link from "next/link";
import { Manrope, Inconsolata, Work_Sans } from "next/font/google";
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

const work = Work_Sans({
  variable: "--font-work",
  weights: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Dandara",
    default: "Dandara - Product Designer",
  },
  description: "Dandara website and portfolio.",
  applicationName: "Dandara Website",
  keywords: [
    "Dandara",
    "Product Design Portfolio",
    "Portfolio",
    "Product Designer",
    "UX Design",
    "UX Designer",
    "Design Engineer",
  ],
  authors: [{ name: "Dandara", url: "https://dandara.vercel.app" }],
  creator: "Dandara",
  publisher: "Dandara",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${inconsolata.variable} ${work.variable} mx-8 antialiased`}
      >
        <nav className="animation-fade-in flex items-center justify-between gap-6 py-8 font-sans text-sm font-medium">
          {/* animate this */}
          <Link href="/">
            <div className="dandara-sun size-10 rounded-full"></div>
          </Link>
          <div className="flex gap-1">
            <Link
              className="rounded-md px-4 py-2 whitespace-nowrap opacity-50 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:text-(--foreground) hover:opacity-100"
              href="/now"
            >
              Now
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
