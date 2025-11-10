import Link from "next/link";
import Image from "next/image";
import "./work.css";

export const metadata = {
  title: "Work",
};

export default function Work() {
  return (
    <div className="mx-auto my-24 max-w-4xl font-sans">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter md:text-6xl md:leading-16">
          <Link
            href="/"
            className="opacity-40 transition-all hover:opacity-100"
          >
            Dandara \
          </Link>{" "}
          Work
        </h1>
        <div className="my-6 justify-between space-y-12 leading-7 font-medium md:flex md:grid-cols-2 md:space-x-16">
          <div className="w-full space-y-4">
            <p>
              My career started in programming. I worked as a{" "}
              <span className="bg-(--dandara)">
                front-end developer for an HR Saas
              </span>{" "}
              that offered an unified way of managing culture and well-being at
              companies. Although coding is a passion of mine, I felt the need
              to know more about our users and their needs, enough to find out{" "}
              <span className="bg-(--dandara)">
                Product Design was a better use of my skills
              </span>
              .
            </p>
            <p>
              That same year, with some free courses, books and some Scott H.
              Young energy, I studied Design. This happened in pandemic times
              while I also studied for Brazil uni entrance exam. Somehow it all
              worked out: I survived the pandemic,{" "}
              <span className="bg-(--dandara)">
                got a full-time role as Product Designer in one of Brazil more
                established design teams, made it to university with honors and
                even managed to get a design award while at it{" "}
              </span>
              .
            </p>
          </div>
          <div className="w-full space-y-4">
            <p>
              Unfortunetely, my stay at{" "}
              <Link
                href="https://newsroom.quintoandar.com.br/"
                className="underline underline-offset-2 hover:bg-(--dandara)"
              >
                5A
              </Link>{" "}
              was short due to a company reestructuration layoff. I left there
              with a good taste of how mature design teams operate and shortly
              after started at Stone. At{" "}
              <Link
                href="https://stone.com.br/"
                className="underline underline-offset-2 hover:bg-(--dandara)"
              >
                Stone
              </Link>
              , I proppel and polish old and new applications on credit card
              machines.
            </p>
            <p>
              This is a very niche opportunity of design and a very risky sector
              (finances and entreuperneuship). Consolidating my skills in this
              environment is likely the reason why{" "}
              <span className="bg-(--dandara)">
                I love complex and specific problems to which we can always find
                elegant, and, in retrospect, simple solutions
              </span>
              .
            </p>
            <button className="float-right mr-2 rounded-md px-4 py-2 whitespace-nowrap opacity-50 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:text-(--foreground) hover:opacity-100">
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1RI9D4Nn2BTSb5wvfFmqhk9y_wy7xqizP/view?usp=sharing"
              >
                Get my CV ⤓
              </Link>
            </button>
          </div>
        </div>
      </section>

      <section className="my-24">
        <h3 className="text-3xl font-bold tracking-tight text-gray-700/20">
          Highlights
        </h3>

        <div className="my-8 grid grid-cols-2 gap-16">
          <div className="flex flex-col items-center justify-between space-y-4 rounded-md border-1 border-gray-700/20 py-6">
            <Image
              src={"/career/talk.jpg"}
              width={2929}
              height={3905}
              className="max-w-1/2 rounded-md"
              alt="Dandara standing on a stage in front of a projected green screen, she is holding a mic and mid-speech"
            ></Image>
            <p className="mt-2 max-w-1/2 text-center font-mono text-sm font-medium text-(--foreground)/40 uppercase">
              Presenting the POS App Store for 100 designers
            </p>
          </div>

          <article className="flex flex-col justify-center space-y-2">
            <h3 className="w-4/5 text-2xl font-bold tracking-tight">
              Main Product Designer of In-Person Sales at Stone, designing sale
              experiences for brazilians entrepeuneurs
            </h3>
            <p className="md:w-10/12">
              In charge of the user interface and experience of more than 10
              applications distributed in more than 16 different credit card
              machine models for all Stone Co. organizations.
            </p>
          </article>

          <article className="flex flex-col justify-center space-y-2">
            <h3 className="w-4/5 text-2xl font-bold tracking-tight">
              End-to-end, edge-to-edge
            </h3>
            <p className="md:w-10/12">
              Onboard new credit card machines models to our ecosystem, beat
              competitors on time-to-market for new trasaction technologies,
              design proprietary applications that cover very specific areas of
              business.
            </p>
          </article>
          <article className="flex flex-col items-center justify-between space-y-8 rounded-md border-1 border-gray-700/20 p-12 pt-12">
            <div className="space-y-2 rounded-md bg-(--dandara) shadow-sm">
              <div className="items center flex items-center gap-4 p-4">
                <p className="font-bold tracking-tight">
                  3 lessons from 3 years designing at the edge of UX
                </p>
                <div className="relative flex size-10">
                  <Link
                    href="/blog/3-years-3-lessons"
                    className="relative flex size-10 items-center justify-center rounded-full bg-(--background) inset-shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 rotate-90 hover:animate-bounce"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="rounded-br-md rounded-bl-md bg-amber-200 p-4 px-6">
                <p className="text-sm leading-snug font-medium">
                  Some things you learn when you start your career designing for
                  non-orthodox devices.
                </p>
              </div>
            </div>
            <p className="mt-2 max-w-1/2 text-center font-mono text-sm font-medium text-(--foreground)/40 uppercase">
              Blog Post
            </p>
          </article>

          <article className="col-span-2 flex flex-col items-center space-y-2 rounded-md border-1 border-gray-700/20 p-6 px-12">
            <div className="justify-content flex items-center px-12">
              <Image
                src={"/work/app-store-1.png"}
                width={1832}
                height={3656}
                className="max-h-128 w-fit rounded-md"
                alt="App Store running on credit card machine showing an app page."
              ></Image>
              <Image
                src={"/work/app-store-2.png"}
                width={1832}
                height={3656}
                className="max-h-128 w-fit rounded-md"
                alt="App Store running on credit card machine, the filtering tab is open."
              ></Image>
              <Image
                src={"/work/app-store-3.png"}
                width={1832}
                height={3656}
                className="max-h-128 w-fit rounded-md"
                alt="App Store running on credit card machine, the sorting tab is open."
              ></Image>
            </div>
            <p className="mt-2 max-w-1/2 text-center font-mono text-sm font-medium text-(--foreground)/40 uppercase">
              THE POS APP STORE
            </p>

            <div className="my-6 justify-between space-y-12 text-sm leading-6 font-medium md:flex md:grid-cols-2 md:space-x-16">
              <div className="w-full space-y-4">
                <p className="text-2xl font-bold">POS App Store</p>
                <div className="border-l-3 border-(--dandara) bg-(--dandara)/20 px-3 py-4">
                  <p className="text-lg italic">
                    “Before this, it was a tiring process to install apps for
                    the clients.” - Stone Agent
                  </p>
                </div>

                <p>
                  On August 2023 Stone had +200 partners running software on its
                  credit card machines. The flow to hire and install these
                  partner apps was convoluted for both Stone agents and Stone
                  clients (entrepeuneurs).
                </p>

                <p>
                  Why not bring the simplicity we already know of installing
                  apps on our phones to these machines?
                </p>
              </div>
              <div className="w-full space-y-4">
                <p>
                  I conducted an internal discovery to delineate the risks and
                  challenges of simplifying this flow, for example, how could
                  this overload our internal teams? The result of this discovery
                  was a rulebook for partners and testing teams.
                </p>
                <p>
                  I also developed the first proprietary app for the store,
                  "Fichas" (Tickets), focused on making the machine usable in
                  small events and not only day-to-day sales.
                </p>

                <div className="px-3 py-4">
                  <p className="text-lg font-bold">
                    40% of Stone partner base was migrated to this new flow
                    within the initial 6 months of launch. Today, this is the
                    default flow for partners.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="flex flex-col justify-center space-y-2">
            <h3 className="w-4/5 text-2xl font-bold tracking-tight">
              UI/UX Jr. #1 Winner
            </h3>
            <div className="space-y-2 leading-relaxed md:w-8/10">
              <p>
                Drove a Design Thinking process from beginning to end, designing
                high-quality Figma prototypes of a financial application for the
                youth. The App was awarded #1 at UI/UX Jr competition.
              </p>
              <p>
                You can{" "}
                <Link
                  target="_blank"
                  href="https://www.youtube.com/watch?v=qv3Z4_mBg9M&pp=0gcJCQYKAYcqIYzv"
                  className="font-bold underline underline-offset-2 hover:bg-(--dandara)"
                >
                  watch me
                </Link>{" "}
                present the case and receive jury's consideration at the
                ceremony or{" "}
                <Link
                  target="_blank"
                  href="https://www.youtube.com/watch?v=qv3Z4_mBg9M&pp=0gcJCQYKAYcqIYzv"
                  className="font-bold underline underline-offset-2 hover:bg-(--dandara)"
                >
                  read the case{" "}
                </Link>{" "}
                in full.
              </p>
            </div>
          </article>
          <article className="flex flex-col items-center space-y-2 rounded-md border-1 border-gray-700/20 py-6">
            <Image
              src={"/work/fin-home.png"}
              width={2929}
              height={3905}
              className="max-w-1/2 rounded-md"
              alt="Dandara standing on a stage in front of a projected green screen, she is holding a mic and mid-speech"
            ></Image>
            <p className="mt-2 max-w-1/2 text-center font-mono text-sm font-medium text-(--foreground)/40 uppercase">
              Awarded mobile application
            </p>
          </article>
        </div>
        <button className="float-right mr-2 rounded-md px-4 py-2 whitespace-nowrap opacity-50 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:text-(--foreground) hover:opacity-100">
          <Link target="_blank" href="/projects">
            Also check out my Projects →
          </Link>
        </button>
      </section>

      <section className="space-y-10">
        <div className="space-y-4">
          <Link
            href="#cta"
            className="bold hover:text(--foreground) flex w-fit items-center space-x-4 self-end rounded-full border-1 border-gray-200 bg-gray-200/30 px-4 py-2"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--dandara) opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-(--dandara)"></span>
            </span>
            <p className="font-mono tracking-tight lowercase">Open for work</p>
          </Link>
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold tracking-tighter md:text-6xl md:leading-16">
              Product Designer
            </p>
            <div className="bold hover:text(--foreground) flex h-fit w-fit items-center space-x-4 rounded-full border-1 border-gray-200 bg-gray-200/30 px-2 py-1">
              <p className="font-mono tracking-tight lowercase">Full time</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold tracking-tighter md:text-6xl md:leading-16">
              Design Engineer
            </p>
            <div className="bold hover:text(--foreground) flex h-fit w-fit items-center space-x-4 rounded-full border-1 border-gray-200 bg-gray-200/30 px-2 py-1">
              <p className="font-mono tracking-tight lowercase">Full time</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold tracking-tighter md:text-6xl md:leading-16">
              UI/UX Designer
            </p>
            <div className="bold hover:text(--foreground) flex h-fit w-fit items-center space-x-4 rounded-full border-1 border-gray-200 bg-gray-200/30 px-2 py-1">
              <p className="font-mono tracking-tight lowercase">Part time</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold tracking-tighter md:text-6xl md:leading-16">
              Talk Speaker
            </p>
            <div className="bold hover:text(--foreground) flex h-fit w-fit items-center space-x-4 rounded-full border-1 border-gray-200 bg-gray-200/30 px-2 py-1">
              <p className="font-mono tracking-tight lowercase">Part time</p>
            </div>
          </div>
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
            className="underline underline-offset-4"
          >
            email{" "}
          </Link>
          and let's have a chat!
        </h3>
        <p className="text-black/50">
          You can also find me on{" "}
          <Link
            href="https://www.linkedin.com/in/nicolydandara/"
            className="font-bold underline underline-offset-2 hover:bg-(--dandara)"
          >
            LinkedIn
          </Link>{" "}
          and{" "}
          <Link
            href="https://x.com/amarelodandara"
            className="font-bold underline underline-offset-2 hover:bg-(--dandara)"
          >
            Twitter
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}
