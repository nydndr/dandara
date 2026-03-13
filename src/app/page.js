import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto my-12 max-w-4xl font-sans md:my-24">
      <header className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter text-stone-700/20 md:text-6xl md:leading-16">
            Dandara
          </h1>
          <h2 className="text-3xl font-bold tracking-tighter md:text-6xl md:leading-16">
            I'm a brazilian product designer. Fluent in english, portuguese,
            design and code.
          </h2>
        </div>
        <div className="flex gap-4 text-gray-700/70">
          <Link
            href="https://www.linkedin.com/in/nicolydandara/"
            className="underline underline-offset-4 hover:bg-(--dandara)"
          >
            LinkedIn
          </Link>

          <Link
            href="https://x.com/amarelodandara"
            className="underline underline-offset-4 hover:bg-(--dandara)"
          >
            Twitter
          </Link>

          <Link
            href="https://github.com/nydndr"
            className="underline underline-offset-4 hover:bg-(--dandara)"
          >
            Github
          </Link>
        </div>
      </header>

      <section className="my-24 block md:my-12 md:flex md:justify-end">
        <div className="w-full space-y-2 md:w-1/2">
          <h3 className="text-sm font-semibold text-gray-700/50">Experience</h3>

          <div>
            <div className="">
              <div className="space-y-2">
                <div className="flex items-baseline justify-between border-b-1 border-gray-700/20 py-2">
                  <Link
                    href="https://www.stone.com.br/"
                    className="text-lg font-medium tracking-tight hover:bg-(--dandara)"
                  >
                    <p>Stone</p>
                  </Link>
                  <p className="font-mono text-gray-700/70">2022-26</p>
                </div>

                <p className="font-work md:w-11/12 md:text-sm">
                  Took care of the whole experience of in-person payments for
                  the only Latin American company at the payments section of the{" "}
                  <Link
                    href="https://www.cnbc.com/the-worlds-top-fintech-companies-2025/"
                    className="underline underline-offset-2 transition hover:bg-(--dandara)"
                  >
                    Top Fintechs Worldwide report
                  </Link>
                  . If you have bought something in-person while in Brazil, you
                  very likely consumed my design expertise.
                </p>
              </div>

              <div className="flex items-baseline justify-between border-b-1 border-gray-700/20 py-2">
                <Link
                  href="https://newsroom.quintoandar.com.br/"
                  className="text-lg font-medium tracking-tight hover:bg-(--dandara)"
                >
                  <p>QuintoAndar</p>
                </Link>
                <p className="font-mono text-gray-700/70">2021-22</p>
              </div>

              <div className="flex items-baseline justify-between border-b-1 border-gray-700/20 py-2">
                <Link
                  href="https://teamhub.com.br/quero-conhecer-a-teamhub/"
                  className="text-lg font-medium tracking-tight hover:bg-(--dandara)"
                >
                  <p>TeamHub</p>
                </Link>
                <p className="font-mono text-gray-700/70">2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-24 space-y-12">
        <article className="space-y-6">
          {/* Mobile display */}

          <div className="stone-display flex h-48 min-w-full items-center overflow-hidden rounded-md border-1 border-gray-700/20 md:hidden">
            <Image
              src="/stone-app-icons-left.png"
              width="240"
              height="240"
              className="hidden"
              alt="stone app icons first half"
            ></Image>
            <Image
              src="/stone-pos.png"
              width="465"
              height="954"
              className="w-1/2"
              alt="stone pos device"
            ></Image>
            <Image
              src="/stone-app-icons-right.png"
              width="240"
              height="240"
              className="w-1/3"
              alt="stone app icons second half"
            ></Image>
          </div>

          <div className="stone-display hidden h-96 min-w-full items-center justify-center gap-6 overflow-hidden rounded-md border-1 border-gray-700/20 md:flex">
            <Image
              src="/stone-app-icons-left.png"
              width="240"
              height="240"
              className="stone-app-icons w-1/5 opacity-0"
              alt="stone app icons first half"
            ></Image>
            <Image
              src="/stone-pos.png"
              width="465"
              height="954"
              className="stone-pos w-1/5"
              alt="stone pos device"
            ></Image>
            <Image
              src="/stone-app-icons-right.png"
              width="240"
              height="240"
              className="stone-app-icons w-1/5 opacity-0"
              alt="stone app icons second half"
            ></Image>
          </div>

          <div className="space-y-2">
            <p className="text-xl font-bold tracking-tight">
              Product Designer @ Stone
            </p>

            <div className="block space-y-6 leading-relaxed md:flex md:gap-24 md:space-y-0">
              <div className="font-manrope w-full space-y-2">
                <p className="">
                  For more than 3 years, I took care of the whole experience of
                  in-person payments at Stone Co.
                </p>
                <p>
                  During this time, I designed an{" "}
                  <span className="font-semibold">App Store</span> experience
                  that runs right onto the credit card machine, launched two
                  applications for said store going from{" "}
                  <span className="font-semibold">0 to 1</span>, joined the
                  championing time-to-market implementation of a new{" "}
                  <span className="font-semibold">payment technology</span> and
                  a lot more.
                </p>
              </div>

              <div className="font-work w-full space-y-2">
                <ul className="font-regular space-y-6 text-sm leading-normal md:w-11/12 md:list-disc md:space-y-2 md:text-base md:leading-relaxed">
                  <li>
                    Designed for the more than 4,5MM Stone devices active across
                    the countrys
                  </li>
                  <li>
                    Designed responsive solutions to run in more than 22 device
                    models
                  </li>
                  <li>
                    For the 3 different platforms that feed the 4 different
                    organizations within the corporation
                  </li>
                  <li> Learned a ton</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <div className="w-full border-1 border-gray-700/5"></div>

        <article className="space-y-4">
          <div className="items-center justify-center gap-6 md:flex md:p-12">
            <Image
              src="/fin.png"
              height="445"
              width="893"
              className="md:w-1/3"
              alt="iphone on financial app home screen"
            ></Image>
            <div className="w-full space-y-1">
              <p className="text-xl font-bold tracking-tight">Fin.</p>

              <div className="font-work space-y-2 text-sm md:w-10/12">
                <p>
                  A financial application for the youth designed in 15 days that
                  went on to win #1 Award at the UI/UX Jr. competition.
                </p>
                <Link
                  href="https://www.youtube.com/watch?v=qv3Z4_mBg9M&pp=0gcJCQYKAYcqIYzv"
                  className="underline underline-offset-2 transition hover:bg-(--dandara)"
                >
                  Watch me
                </Link>{" "}
                present at the ceremony.
              </div>
            </div>
          </div>
        </article>

        <article className="items-center justify-center gap-6 space-y-6 rounded-md border-1 border-gray-700/20 p-6 md:flex md:space-y-0 md:p-12">
          <div className="w-full">
            <Image
              src="/links-ondas-amarelas.png"
              width="796"
              height="481"
              alt="podcast cover art"
            ></Image>
          </div>

          <div className="w-full space-y-4">
            <div className="space-y-2">
              <h5 className="text-xl font-bold tracking-tight">
                links amarelos + ondas amarelas
              </h5>
              <p className="font-work text-sm md:w-11/12">
                Todo mês eu faço uma curadoria do melhor do mundo que eu
                encontrei por aí.{" "}
                <Link
                  href="https://nydndr.substack.com/"
                  className="underline underline-offset-2 transition hover:bg-(--dandara)"
                >
                  {" "}
                  Links Amarelos
                </Link>{" "}
                é a versão escrita dessa curadoria que vai pra sua inbox e{" "}
                <Link
                  href="https://open.spotify.com/show/043Gs7eyY2KOlotEWSTSxB"
                  className="underline underline-offset-2 transition hover:bg-(--dandara)"
                >
                  {" "}
                  Ondas Amarelas
                </Link>{" "}
                é a versão em podcast que vai para o seu player favorito.
              </p>
            </div>

            <div className="">
              <Link href="https://open.spotify.com/show/043Gs7eyY2KOlotEWSTSxB">
                <Image
                  src="/spotify-podcast-badge-wht-grn-660x160.svg"
                  width="165"
                  height="40"
                  alt="Spotify badge"
                ></Image>
              </Link>
            </div>
          </div>
        </article>
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
