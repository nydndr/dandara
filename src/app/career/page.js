import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Career",
};

export default function Career() {
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
          Career
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
              Unfortunetely, my stay at 5A was short due to a company
              reestructuration layoff. I left there with a good taste of how
              mature design teams operate and shortly after started at Stone. At
              Stone, I proppel and polish old and new applications on credit
              card machines.
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
            <Link
              href="#cta"
              className="bold hover:text(--foreground) float-right flex w-fit items-center space-x-4 rounded-full bg-(--dandara)/10 px-4 py-2"
            >
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--dandara) opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-(--dandara)"></span>
              </span>
              <p>Open for work</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="my-24">
        <div className="justify-between border-b-3 border-dotted text-(--foreground)/30">
          <h2 className="font-mono text-3xl font-bold tracking-wide uppercase">
            Career Highlights
          </h2>
        </div>

        <div className="my-8 justify-between space-y-12 font-medium md:flex md:grid-cols-2 md:space-x-12">
          <div className="w-full">
            <Image
              src={"/career/talk.jpg"}
              width={2929}
              height={3905}
              className=""
              alt="Dandara standing on a stage in front of a projected green screen, she is holding a mic and mid-speech"
            ></Image>

            <p className="mt-2 font-mono text-sm font-medium text-(--foreground)/40 uppercase">
              Presenting the POS App Store for 100 designers
            </p>
          </div>
          <div>
            <div className="space-y-6">
              <article className="space-y-1">
                <a className="text-2xl font-bold hover:underline hover:underline-offset-2">
                  In-Person-Sales design&nbsp;context
                </a>
                <p className="md:w-10/12">
                  In charge of the experience of more than 10 apps in 16 credit
                  card machine models, encompassing 2 different systems and all
                  Stone sub-organizations.
                </p>
              </article>
              <article className="space-y-1">
                <a className="text-2xl font-bold hover:underline hover:underline-offset-2">
                  POS App Store
                </a>
                <p className="md:w-10/12">
                  Bringing the easiness of phone app stores to credit card
                  machines, enabling more than 200 Stone Partner applications.
                </p>
              </article>
              <article className="space-y-1">
                <a className="text-2xl font-bold hover:underline hover:underline-offset-2">
                  Tickets App
                </a>
                <p className="md:w-10/12">
                  Design and launch of Stone App Store's first proprietary app.
                  Makes it possible to sell product at a event with ticketing
                  system.
                </p>
              </article>
              <article className="space-y-1">
                <Link
                  target="_blank"
                  href="https://www.youtube.com/watch?v=qv3Z4_mBg9M&pp=0gcJCQYKAYcqIYzv"
                  className="text-2xl font-bold hover:underline hover:underline-offset-2"
                >
                  Winning a UI/UX competition in first place →{" "}
                </Link>
                <p className="w-10/12">
                  You can watch the online ceremony where I present the project
                  and receive jury's consideration.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <h3
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
      </h3>
    </div>
  );
}
