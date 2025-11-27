import Link from "next/link";

import SmallprojectList from "./projects/components/SmallProjectList";

export default function Home() {
  return (
    <div className="mx-auto my-24 max-w-4xl space-y-24 font-sans">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter text-stone-700/20 md:text-6xl md:leading-16">
          Product Designer @ Stone
        </h1>
        <h2 className="text-3xl font-bold tracking-tighter md:text-6xl md:leading-16">
          I am a brazilian designer far too comfortable with code and niche
          problems.
        </h2>
        <h3 className="text-xl md:w-4/5 md:text-2xl md:leading-10">
          Currently taking care of{" "}
          <Link href="/work" className="highligther-animated">
            all in-person sales experience at Stone
          </Link>
          , previously{" "}
          <Link
            href="https://newsroom.quintoandar.com.br/"
            className="underline underline-offset-2 transition hover:bg-(--dandara)"
          >
            QuintoAndar
          </Link>
          . I curate content at{" "}
          <Link
            href="https://nydndr.substack.com/"
            className="highligther-animated"
          >
            Amarelo Dandara
          </Link>{" "}
          and take life seriously, everywhere.
        </h3>
      </header>

      <section className="space-y-12 md:flex md:grid-cols-2 md:justify-between md:space-y-0 md:space-x-12">
        <div className="w-full">
          <div className="space-y-8">
            <div className="space-y-4 leading-7 font-medium">
              <p>
                Portuguese is my first language, English is my second. Design is
                my first language, Development is my second. Sometimes I design,
                sometimes I code. But I always think in both.
              </p>

              <p>
                I design for the only latin american company at the payments
                section of the{" "}
                <Link
                  href="https://www.cnbc.com/the-worlds-top-fintech-companies-2025/"
                  className="underline underline-offset-2 transition hover:bg-(--dandara)"
                >
                  Top Fintechs Worldwide report
                </Link>
                . If you have bought something in-person in Brazil, you very
                likely consumed my design expertise.
              </p>

              <div className="space-y-4 leading-7 font-medium">
                <p>
                  You can find me on{" "}
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
                  . Take a peek at my{" "}
                  <Link
                    href="https://www.figma.com/@dandara"
                    className="underline underline-offset-2 hover:bg-(--dandara)"
                  >
                    Figma
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="https://github.com/nydndr"
                    className="underline underline-offset-2 hover:bg-(--dandara)"
                  >
                    Github
                  </Link>{" "}
                  too. But ideally, send me an{" "}
                  <Link
                    href="mailto:nicolydndr@gmail.com"
                    className="underline underline-offset-2 hover:bg-(--dandara)"
                  >
                    email
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end justify-end md:flex-row md:items-center">
              <Link
                href="/work"
                className="right-arrow rounded-md border-1 border-dashed border-stone-700/20 px-2 py-2 whitespace-nowrap text-stone-700/70 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:px-5 hover:text-(--foreground) hover:opacity-100"
              >
                Read more about my work
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full space-y-6">
          <div>
            <div className="flex justify-between">
              <h3 className="text-lg font-bold tracking-tight text-stone-700/30">
                Projects
              </h3>
            </div>

            <div className="space-y-3 py-2">
              <SmallprojectList />
            </div>

            <div className="flex flex-col items-end justify-end md:flex-row md:items-center">
              <Link
                href="/projects"
                className="right-arrow rounded-md px-2 py-2 whitespace-nowrap text-stone-700/70 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:px-5 hover:text-(--foreground) hover:opacity-100"
              >
                See all projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="space-y-6">
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
