import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto my-24 max-w-4xl font-sans">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter md:text-6xl md:leading-16">
          Dandara is a brazilian product designer far too comfortable with code
          and niche problems.
        </h1>
        <h2 className="text-xl font-medium text-gray-700 md:text-3xl md:leading-10">
          Taking care of all{" "}
          <Link href="/work" className="textmarker-effect-mvp">
            in-person sale experience at Stone
          </Link>
          , mapping the field of design at{" "}
          <Link href="/" className="textmarker-effect-mvp">
            Designers, <em>et al</em>
          </Link>{" "}
          and curating content at Amarelo Dandara.
        </h2>
      </section>

      <section className="my-12 space-y-12 font-medium md:flex md:grid-cols-2 md:justify-between md:space-x-12">
        <div className="w-full">
          <div className="flex flex-col justify-between space-y-2 border-b-1 border-gray-700/20 py-2 md:flex-row md:space-y-0">
            <h3 className="text-3xl font-bold tracking-tight">Work</h3>
            <Link
              href="#cta"
              className="bold hover:text(--foreground) flex w-fit items-center space-x-4 self-end rounded-full border-1 border-gray-200 bg-gray-200/30 px-4 py-2"
            >
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--dandara) opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-(--dandara)"></span>
              </span>
              <p className="font-mono tracking-tight lowercase">
                Open for work
              </p>
            </Link>
          </div>

          <div className="px-4 py-4">
            <div className="border-l-3 border-(--dandara) bg-(--dandara)/20 px-3 py-4">
              <p className="text-lg">
                I create simple experiences that solve complex and niche user
                needs by combining my cross-functional knowledge of design,
                business and development with the knowledge of others.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between md:flex-row md:items-center">
            <button className="mr-2 rounded-md px-4 py-2 whitespace-nowrap opacity-50 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:text-(--foreground) hover:opacity-100">
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1K8dhryLe11a8_9aTGQfGifM8EKzTH6_S/view?usp=sharing"
              >
                Get my CV ⤓
              </Link>
            </button>
            <Link
              href="/work"
              className="float-right rounded-md px-4 py-2 whitespace-nowrap opacity-50 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:text-(--foreground) hover:opacity-100"
            >
              Read more about my work&nbsp;→
            </Link>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between border-b-1 border-gray-700/20 py-2.5">
            <h3 className="text-3xl font-bold tracking-tight">Projects</h3>
          </div>
          <div className="space-y-6 py-4">
            <article className="space-y-1">
              <a className="text-2xl font-bold hover:underline hover:underline-offset-2">
                Designers, <em>et al</em> ↗
              </a>
              <p className="w-10/12">
                The field of design and all its super specific subfields,
                visualized.
              </p>
            </article>
            <article className="space-y-1">
              <Link
                target="_blank"
                href="https://nydndr.substack.com/"
                className="text-2xl font-bold hover:underline hover:underline-offset-2"
              >
                Amarelo Dandara ↗
              </Link>
              <p className="w-10/12">
                Monthly newsletter with the best I find around the web & world.
              </p>
            </article>
            <article className="space-y-1">
              <Link
                target="_blank"
                href="https://www.behance.net/gallery/123564241/Fin-Financas-Jovem"
                className="text-2xl font-bold hover:underline hover:underline-offset-2"
              >
                Fin. →{" "}
                <span className="font-mono text-lg font-medium text-gray-500/50 uppercase">
                  Awarded design
                </span>
              </Link>
              <p className="w-10/12">
                Personal finance application for the new generation, #1 at UI/UX
                Jr. Competition.{" "}
              </p>
            </article>
          </div>

          {
            // <Link href="/career" className="float-right opacity-50 hover:text-(--foreground) hover:opacity-100 hover:bg-(--dandara) rounded-md px-4 py-2 transition-all ease-in-out duration-300">See all projects →</Link>
          }
        </div>
      </section>

      <h4
        id="cta"
        className="text-3xl font-bold tracking-tighter md:text-6xl md:leading-16"
      >
        If you think I can help your product, service or team,{" "}
        <Link
          href="mailto:nicolydndr@gmail.com"
          className="underline underline-offset-4"
        >
          reach out
        </Link>
        ! Let's talk about making it a reality.
      </h4>
    </div>
  );
}
