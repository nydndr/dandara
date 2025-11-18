import Link from "next/link";

import ProjectList from "./projects/components/ProjectList";

export default function Home() {
  return (
    <div className="mx-auto my-24 max-w-4xl font-sans">
      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter text-gray-700/20 md:text-6xl md:leading-16">
          Product Designer @ Stone
        </h2>
        <h1 className="text-3xl font-bold tracking-tighter md:text-6xl md:leading-16">
          Dandara is a brazilian product designer far too comfortable with code
          and niche problems.
        </h1>
        <h2 className="text-xl text-gray-700 md:w-4/5 md:text-2xl md:leading-10">
          Taking care of{" "}
          <Link href="/work" className="highligther-animated">
            all in-person sales experience at Stone
          </Link>
          , curating content at{" "}
          <Link
            href="https://nydndr.substack.com/"
            className="highligther-animated"
          >
            Amarelo Dandara
          </Link>{" "}
          and uncovering the world with side projects.
        </h2>
      </section>

      <section className="my-12 space-y-12 py-12 md:flex md:grid-cols-2 md:justify-between md:space-x-12">
        <div className="w-full">
          <div className="space-y-8 md:px-4">
            <div className="space-y-4">
              <p className="leading-7 font-medium">
                I create simple experiences that solve complex and niche user
                needs by combining my cross-functional knowledge of design,
                business and development with the knowledge of others.
              </p>
              <div className="flex flex-col items-end justify-end md:flex-row md:items-center">
                <Link
                  href="/work"
                  className="rounded-md px-4 py-2 whitespace-nowrap text-gray-700/70 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:text-(--foreground) hover:opacity-100"
                >
                  Read more about my work&nbsp;→
                </Link>
              </div>
            </div>

            <div>
              <ul className="grid grid-cols-2 gap-y-2 text-gray-700/50 underline underline-offset-2 md:block md:space-y-2">
                <li className="w-fit hover:bg-(--dandara)">
                  <Link href="https://www.linkedin.com/in/nicolydandara/">
                    LinkedIn
                  </Link>
                </li>
                <li className="w-fit hover:bg-(--dandara)">
                  <Link href="https://x.com/amarelodandara">Twitter</Link>
                </li>
                <li className="w-fit hover:bg-(--dandara)">
                  <Link href="https://www.figma.com/@dandara">Figma</Link>
                </li>
                <li className="w-fit hover:bg-(--dandara)">
                  <Link href="https://github.com/nydndr">Github</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between">
            <h3 className="text-3xl font-bold tracking-tight text-gray-700/20">
              Projects
            </h3>
          </div>
          <div className="space-y-2 py-2">
            <ProjectList display="preview" />
          </div>

          <Link
            href="/projects"
            className="float-right rounded-md px-4 py-2 whitespace-nowrap text-gray-700/50 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:text-(--foreground) hover:opacity-100"
          >
            See all my projects →
          </Link>
        </div>
      </section>

      <footer className="my-20 space-y-6">
        <h3
          id="cta"
          className="text-3xl font-bold tracking-tighter md:text-6xl md:leading-16"
        >
          If I can help you, send me an{" "}
          <Link
            href="mailto:nicolydndr@gmail.com"
            className="underline underline-offset-4 hover:bg-(--dandara)"
          >
            email{" "}
          </Link>
          and let's have a chat!
        </h3>
        <p className="text-gray-700/70">
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
          .
        </p>
      </footer>
    </div>
  );
}
