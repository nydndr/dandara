import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Brag",
  description:
    "Get to know what I aim to work for and what I have done for the teams I have been in.",
};

export default function BragPage() {
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
          Brag
        </h1>
      </header>

      <div className="grid grid-cols-3 gap-8">
        <div className="h-fit space-y-2 rounded border-1 border-(--dandara) bg-(--dandara)/20 p-4 text-sm">
          <p className="font-semibold tracking-tight">
            What is a Brag document?
          </p>
          <p className="font-work text-sm">
            A movement. A call for raising the bar. An excellent idea by the
            Mostly Technical gang.
          </p>
          <Link
            href="/writings/the_rise_of_bragging"
            className="font-work text-sm underline underline-offset-2 transition hover:bg-(--dandara)"
          >
            Read more about it
          </Link>
        </div>

        <div className="col-span-2 w-full">
          <div className="flex space-x-6">
            <div className="rounded border-1 border-stone-200 p-6">
              <Image
                src="/profile.jpg"
                alt="Dandara profile"
                height={300}
                width={200}
              ></Image>
            </div>
            <div className="rounded border-1 border-stone-200 p-6">
              <Image
                src="/talk.jpg"
                alt="Dandara giving a talk on stage"
                height={300}
                width={200}
              ></Image>
            </div>
          </div>

          <div className="prose prose-a:underline-offset-2 prose-a:hover:bg-(--dandara) prose-em:text-gray-700/40 prose-h1:tracking-tight font-work prose-headings:font-sans">
            <article>
              <h2>An introduction</h2>

              <ul>
                <li>
                  I am a <span className="font-semibold">24 years old </span>
                  Product Designer with{" "}
                  <span className="font-semibold">
                    5 years of experience
                  </span>{" "}
                  under my belt.
                </li>
                <li>
                  Most of my professional experience was{" "}
                  <span className="font-semibold">
                    designing software for credit card machines
                  </span>
                  . Unique? A little. Interesting? Hell yes. Pressuring to see
                  your work every time you go out to buy something? Definetely!{" "}
                  <Link
                    href="https://www.stone.com.br/maquina-de-cartao"
                    className="rounded-full border-1 border-(--dandara) bg-(--dandara)/25 px-2 py-1 text-sm whitespace-nowrap no-underline"
                  >
                    Get to know Stone
                  </Link>
                </li>
                <li>
                  All of my professional experiences thus far have been remote
                  and I know{" "}
                  <span className="font-semibold">
                    {" "}
                    great work can be done anywhere
                  </span>
                  . I have juggled work with high school, technical school and
                  now graduate school. If I know time management? I know time
                  management.
                </li>
                <li>
                  I am currently designing a{" "}
                  <span className="font-semibold">
                    Service Design framwork for Museums to assess their user
                    experience
                  </span>
                  . This is the finishing work of my Bachelor's in Graphic
                  Design.{" "}
                  <span className="animate-pulse rounded-full border-1 border-stone-200 bg-stone-100/50 px-2 py-1 text-sm">
                    Incoming link
                  </span>
                </li>
              </ul>

              <h3>I am also a human</h3>

              <p>
                We often get lost in the land of professionalism and get rid of
                all the wrong things. If I am going to spend a third of my day
                with you, I would like you to know the things I want to be
                remembered for:
              </p>

              <ul>
                <li>
                  <span className="font-semibold">
                    My biggest goal in life{" "}
                  </span>
                  is to get a shade of yellow named after me and that's why you
                  often see me under the guise of Amarelo (yellow) Dandara - you
                  gotta start somewhere, ya know?{" "}
                </li>
                <li>
                  My biggests contributions to humanity are in the areas of
                  organization and spreadsheets. My most requested link so far
                  is{" "}
                  <span className="font-semibold">
                    my Notion of 200+ best things to do in my city
                  </span>
                  .{" "}
                  <Link
                    href="https://nydndr.notion.site/belo-role"
                    className="rounded-full border-1 border-(--dandara) bg-(--dandara)/25 px-2 py-1 text-sm whitespace-nowrap no-underline"
                  >
                    Visit Belo Horizonte, Belo Rolê
                  </Link>
                </li>
                <li>
                  Thankfully, <span className="font-semibold">my podcast</span>{" "}
                  is already making a run for the #1 place in this ranking.
                  Which is good 'cause writing, recording, producing, editing
                  and designing it ain't easy.{" "}
                  <Link
                    href="https://open.spotify.com/show/043Gs7eyY2KOlotEWSTSxB?si=c652dd1e6ab24677"
                    className="rounded-full border-1 border-(--dandara) bg-(--dandara)/25 px-2 py-1 text-sm whitespace-nowrap no-underline"
                  >
                    Listen to Ondas Amarelas
                  </Link>
                </li>
                <li>
                  I am determined to make{" "}
                  <span className="font-semibold">my girlfriend</span>, Jade,{" "}
                  <span className="font-semibold">
                    the most loved woman in the world
                  </span>
                  . Anyone that gets in my way, is my swore enemy.
                </li>
              </ul>
            </article>

            <article>
              <h2>What energizes me at work?</h2>

              <ul>
                <li>
                  Being helpful as a designer without touching Figma.{" "}
                  <span className="font-semibold">
                    Let's draw the problem with a pen, let's hit the code, let's
                    write a document.
                  </span>{" "}
                  I believe in design as an archetype I fall in often, not a
                  restrainment in my work.{" "}
                  <span className="animate-pulse rounded-full border-1 border-stone-200 bg-stone-100/50 px-2 py-1 text-sm">
                    Incoming link
                  </span>
                </li>
                <li>
                  Sharing.{" "}
                  <span className="font-semibold">
                    Giving a talk or writing a piece on work I am proud of.
                  </span>{" "}
                  Assign me an audience and watch me flourish.{" "}
                  <span className="animate-pulse rounded-full border-1 border-stone-200 bg-stone-100/50 px-2 py-1 text-sm">
                    Incoming link
                  </span>
                </li>
                <li>
                  Turning something people want to do into something they can
                  do. Enabling.{" "}
                  <span className="font-semibold">Building tools.</span> I have
                  designed tools for selling, for managing finances, for
                  triaging documents and there is nothing like making people's
                  work easier to do.
                </li>
                <li>
                  Turning something our team wants to see into something
                  everyone in the company can see. Documentation. Building
                  internal tools and documentations for systems that do{" "}
                  <Link href="https://destraynor.com/writing/the-purpose-of-a-system-is-what-it-does/">
                    what they are supposed to do
                  </Link>
                  .
                </li>
              </ul>
            </article>

            <article>
              <h2>What now?</h2>
              <p>
                If you want to get in touch to talk about what your team is up
                to and get to know my design better, the quickest way to reach
                me is sending an email to{" "}
                <Link href="mailto:nicolydndr@gmail.com">
                  nicolydndr@gmail.com
                </Link>
                . The same goes for any peers that want to pick my brain, get
                inside my head and learn from me.
              </p>

              <p>
                But if you read this and didn't really vibe with the idea, we
                have just saved ourselves from 40 minutes of pointless
                conversation and I really love that for your company.
              </p>

              <Image
                src="/signature.png"
                alt="my handwritten signature"
                height={25}
                width={100}
                className="float-end"
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
