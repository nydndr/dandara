import Link from "next/link";

import BrazilianFlag from "@/components/BrazilianFlag";
import BlogPlostList from "./components/BlogPostsList";

export default function Blog() {
  return (
    <div className="mx-auto my-24 max-w-4xl space-y-12 font-sans">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter text-stone-700 md:text-6xl md:leading-16">
          <Link
            href="/"
            className="text-stone-700/20 transition-all hover:text-stone-700"
          >
            Dandara \
          </Link>{" "}
          Blog
        </h1>

        <div className="space-y-1 font-medium md:w-4/5">
          <p>
            I write about design, development and creation or whatever else I
            please.
          </p>
          <p>
            Eu também escrevo mensalmente na minha newsletter{" "}
            <Link
              href="https://nydndr.substack.com/"
              className="underline underline-offset-2 transition hover:bg-(--dandara)"
            >
              <div className="mr-1 inline-block size-4 align-middle">
                <BrazilianFlag></BrazilianFlag>
              </div>
              Links Amarelos
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="">
        <BlogPlostList></BlogPlostList>
      </section>

      <footer className="space-y-6">
        <p className="text-gray-700/50">
          You can also find me on{" "}
          <Link
            href="https://www.linkedin.com/in/nicolydandara/"
            className="underline underline-offset-2 hover:bg-(--dandara)"
          >
            LinkedIn
          </Link>{" "}
          and{" "}
          <Link
            href="https://x.com/amarelodandara"
            className="underline underline-offset-2 hover:bg-(--dandara)"
          >
            Twitter
          </Link>
        </p>
      </footer>
    </div>
  );
}
