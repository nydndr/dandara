import "./globals.css";
import Link from "next/link";
import {
  Manrope,
  Anton,
  Fira_Code,
  Covered_By_Your_Grace,
} from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], display: "block" });
const anton = Anton({ subsets: ["latin"], weight: "400", display: "block" });
const fira_code = Fira_Code({ subsets: ["latin"], display: "block" });
const covered_by_your_grace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
  display: "block",
});

export const metadata = {
  title: "Dandara | Product Designer",
  description:
    "Portfólio de Nicoly Dandara, Product Designer/Gráfica/de Informação nascida e lapidada no Brasil.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          (manrope.className,
          anton.className,
          fira_code.className,
          covered_by_your_grace.className,
          "overflow-x-hidden font-manrope")
        }>
        <nav className="px-6 md:px-20 my-12 flex w-screen justify-between gap-12 text-xl font-anton uppercase text-dandara-black">
          <div className="flex items-center space-x-6">
            <Link href="/">
              <div className="h-8 w-8 bg-dandara-yellow rounded-full transition-colors hover:bg-dandara-black"></div>
            </Link>
            <Link
              href="/about"
              className="hover:underline hover:underline-offset-4">
              <p>Sobre</p>
            </Link>
          </div>

          <div className="flex gap-6 underline underline-offset-4">
            <Link href="mailto:nicolydndr@gmail.com">
              <p>Email</p>
            </Link>
            <Link href="https://www.linkedin.com/in/nicolydandara/">
              <p>Linkedin</p>
            </Link>
          </div>
        </nav>
        <div className="px-6 md:px-20 mx-auto w-full 2xl:w-1/2">{children}</div>
      </body>
    </html>
  );
}
