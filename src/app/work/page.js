import Link from "next/link";
import Image from "next/image";

import POSGallery from "./components/POSGallery";

export const metadata = {
  title: "Work",
  description: "Dandara's Portfolio of most relevant works.",
};

export default function Work() {
  return (
    <div className="mx-auto my-24 max-w-4xl space-y-12 font-sans">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter text-stone-700 md:text-6xl md:leading-16">
          <Link
            href="/"
            className="text-stone-700/20 transition-all hover:text-stone-700"
          >
            Dandara \
          </Link>{" "}
          Work
        </h1>
        <h3 className="text-xl font-medium tracking-tight md:w-4/5 md:text-2xl md:leading-10">
          My portfolio of niche and technical problems I have solved with a
          product, service and interaction design approach.
        </h3>
      </header>

      <article className="space-y-4 leading-7">
        <POSGallery></POSGallery>
        <div className="space-y-1">
          <h3 className="text-lg font-bold tracking-tight md:text-2xl">
            Voice of design for all In-Person Sales
          </h3>
          <div className="mt-6 justify-between space-y-12 md:flex md:grid-cols-2 md:space-x-16">
            <div className="w-full space-y-4">
              <p>
                In charge of user interfaces and experiences at Latin America's
                biggest acquirer. Designing and delivering applications on all
                Stone Co. organizations for three years and counting.
              </p>
              {/* <div className="flex flex-col items-end justify-end md:flex-row md:items-center">
                <Link
                  href="/work/stone"
                  className="right-arrow rounded-md px-2 py-2 whitespace-nowrap text-stone-700/70 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:px-5 hover:text-(--foreground) hover:opacity-100"
                >
                  Read more
                </Link>
              </div> */}
            </div>

            <div className="w-full space-y-2 divide-y-1 divide-solid divide-stone-700/20">
              <div className="flex gap-2 pb-4">
                <span className="w-24 font-mono text-5xl font-medium text-stone-700/70">
                  10+
                </span>
                <p className="">
                  applications ranging for general purpose to very specific
                  subfields of sales
                </p>
              </div>
              <div className="flex gap-2 pt-4">
                <span className="w-24 font-mono text-5xl font-medium text-stone-700/70">
                  20+
                </span>
                <p className="">
                  models of credit card machines with cohesive and responsive
                  experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="space-y-4 leading-7">
        <div className="justify-content col-span-2 flex-col items-center space-y-2 overflow-x-scroll rounded-md border-1 border-gray-700/20 p-4 px-2 md:overflow-hidden md:p-6 md:px-6">
          <div className="flex gap-4">
            <div>
              <Image
                src={"/work/app-store-1.png"}
                width={703}
                height={1207}
                className=""
                alt="App Store running on credit card machine showing an app page."
              ></Image>
              <p className="text-center font-mono text-sm font-medium text-(--foreground)/40 uppercase">
                Store App
              </p>
            </div>

            <div>
              <Image
                src={"/work/app-store-2.png"}
                width={703}
                height={1207}
                className=""
                alt="App Store running on credit card machine showing an app page."
              ></Image>
              <p className="text-center font-mono text-sm font-medium text-(--foreground)/40 uppercase">
                Camera App
              </p>
            </div>

            <div>
              <Image
                src={"/work/app-store-3.png"}
                width={703}
                height={1207}
                className=""
                alt="App Store running on credit card machine showing an app page."
              ></Image>
              <p className="text-center font-mono text-sm font-medium text-(--foreground)/40 uppercase">
                Ticketing App
              </p>
            </div>

            <div>
              <Image
                src={"/work/app-store-4.png"}
                width={703}
                height={1207}
                className=""
                alt="App Store running on credit card machine showing an app page."
              ></Image>
              <p className="text-center font-mono text-sm font-medium text-(--foreground)/40 uppercase">
                Scheduled Payments App
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-lg font-bold tracking-tight md:text-2xl">
            An app store for credit card machines
          </h3>

          <div className="mt-6 justify-between space-y-12 md:flex md:grid-cols-2 md:space-x-16">
            <div className="w-full space-y-4">
              <p className="">
                The flow to hire and install these partner apps was convoluted
                for both Stone agents and Stone clients (entrepeuneurs). The App
                Store brought the simplicity we already know from our phones to
                credit card machines.
              </p>

              {/* <div className="flex flex-col items-end justify-end md:flex-row md:items-center">
                <Link
                  href="/work/store"
                  className="right-arrow rounded-md px-2 py-2 whitespace-nowrap text-stone-700/70 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:px-5 hover:text-(--foreground) hover:opacity-100"
                >
                  Read more
                </Link>
              </div> */}
            </div>

            <div className="w-full space-y-2 divide-y-1 divide-solid divide-stone-700/20">
              <div className="flex gap-2 pb-4">
                <span className="w-24 font-mono text-5xl font-medium text-stone-700/70">
                  40%
                </span>
                <p className="">
                  of Stone Parter base migrated to this new flow within the
                  initial 6 months of launch
                </p>
              </div>
              <div className="flex gap-2 pt-4">
                <span className="w-24 font-mono text-5xl font-medium text-stone-700/70 italic">
                  ""
                </span>
                <p className="">
                  Before this, it was a tiring process to install apps for the
                  clients. - <span className="text-sm">Stone Agent</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="space-y-4">
        <h4 className="text-2xl font-bold tracking-tight text-stone-700/20">
          Side Projects
        </h4>

        <div className="flex gap-6">
          <article className="flex w-full flex-col justify-center space-y-4">
            <div className="justify-content flex h-120 flex-col items-center space-y-6 overflow-x-scroll rounded-md border-1 border-gray-700/20 p-4 px-2 md:overflow-hidden md:p-6 md:px-6">
              <Image
                src={"/work/fin-home.png"}
                width={2929}
                height={3905}
                className="max-w-1/2 rounded-md"
                alt="Home of a financial application called Fin"
              ></Image>
              <p className="max-w-1/2 text-center font-mono text-sm font-medium text-(--foreground)/40 uppercase">
                Awarded mobile application
              </p>
            </div>
            <div className="space-y-2">
              <div className="">
                <h3 className="text-lg font-bold tracking-tight md:w-4/5 md:text-2xl">
                  Fin.
                </h3>
                <div className="space-y-2 leading-7">
                  <p>Financial application for the youth.</p>
                </div>
              </div>
              <div className="w-full space-y-2 divide-y-1 divide-solid divide-stone-700/20">
                <div className="flex gap-2 pb-4">
                  <span className="font-mono text-5xl font-medium text-stone-700/70">
                    #1
                  </span>
                  <div className="flex flex-col justify-between">
                    <p>at UI/UX Jr. competition</p>
                    <p className="text-sm">
                      You can{" "}
                      <Link
                        target="_blank"
                        href="https://www.youtube.com/watch?v=qv3Z4_mBg9M&pp=0gcJCQYKAYcqIYzv"
                        className="underline underline-offset-2 hover:bg-(--dandara)"
                      >
                        watch me
                      </Link>{" "}
                      present at the ceremony
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col space-y-4">
            <div className="justify-content col-span-2 flex h-120 flex-col items-center space-y-2 overflow-x-scroll rounded-md border-1 border-gray-700/20 p-4 px-2 md:overflow-hidden md:p-6 md:px-6">
              <Image
                src={"/work/muni-mockup.png"}
                width={1724}
                height={1720}
                className="rounded-md"
                alt="Extension running on chrome browser"
              ></Image>
              <p className="mt-2 max-w-1/2 text-center font-mono text-sm font-medium text-(--foreground)/40 uppercase">
                Chrome extension
              </p>
            </div>
            <div className="space-y-2">
              <div className="">
                <h3 className="text-lg font-bold tracking-tight md:w-4/5 md:text-2xl">
                  Muni
                </h3>
                <div className="leading-7">
                  <p>Keep tabs on what you accomplished at work.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="my-24 space-y-4">
        <h4 className="text-2xl font-bold tracking-tight text-stone-700/20">
          About
        </h4>

        <div className="flex gap-6">
          <div className="w-full space-y-4">
            <p className="leading-7">
              My career started in programming. I worked as a{" "}
              <span className="highligther">
                front-end developer for an HR Saas
              </span>{" "}
              . The need to know more about our users needs at every problem we
              faced, told me{" "}
              <span className="highligther">
                Product Design was a better use of my skills
              </span>{" "}
              at that moment. I pivoted that same year with some free courses,
              some books and a ton of Scott H. Young energy.
            </p>
            <p className="leading-7">
              All of this happened in pandemic times while I also studied for
              Brazil uni entrance exam. Somehow it all worked out: I survived
              the pandemic,{" "}
              <span className="highligther">
                got a full-time role as Product Designer in one of Brazil more
                established design teams, made it to university with honors and
                even managed to get a design award while at it{" "}
              </span>
              .
            </p>
          </div>
          <div className="w-full space-y-4 leading-7">
            <p className="">
              Since then, I have designed for very niche and exciting companies
              with the mission of revolutionizing fields known for their
              bureaucracy and resistance to change.
            </p>
            <p>
              <span className="highligther">
                My preferred problems are those that go beyond our screens
              </span>{" "}
              and can be seen as services and parts of a system, thankfully this
              definition fits more problems than people would think.
            </p>

            <div className="flex flex-col items-end justify-end md:flex-row md:items-center">
              <Link
                href="https://drive.google.com/file/d/1RI9D4Nn2BTSb5wvfFmqhk9y_wy7xqizP/view?usp=sharing"
                className="down-arrow rounded-md border-1 border-dashed border-gray-700/20 px-2 py-2 whitespace-nowrap text-gray-700/70 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:px-5 hover:text-(--foreground) hover:opacity-100"
              >
                Get my CV
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
