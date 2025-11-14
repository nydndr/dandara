import Link from "next/link";

import { getLatestUpdate } from "./getLatestUpdate";

export const metadata = {
  title: "Now",
  description: "What Dandara is working on right now.",
};

export default async function NowPage() {
  return (
    <div className="mx-auto my-24 max-w-4xl font-sans">
      <section className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tighter md:text-6xl md:leading-16">
          <Link
            href="/"
            className="opacity-40 transition-all hover:opacity-100"
          >
            Dandara \
          </Link>{" "}
          Now
        </h1>
        <h2 className="text-xl text-gray-700 md:w-4/5 md:text-2xl md:leading-10">
          This is a summary of{" "}
          <span className="highligther-animated">
            where I'm putting my energy
          </span>{" "}
          right now.
        </h2>

        <p className="text-lg font-medium text-gray-700/40 md:leading-9">
          Read more about{" "}
          <Link
            href="https://nownownow.com/about"
            className="underline underline-offset-2"
          >
            Now
          </Link>{" "}
          pages
        </p>
      </section>
      <article className="mt-12">
        {getLatestUpdate().then((data) => {
          return (
            <div
              className="prose prose-a:underline-offset-2 prose-a:hover:bg-(--dandara) prose-em:text-gray-700/40 prose-h1:tracking-tight font-work prose-headings:font-sans"
              dangerouslySetInnerHTML={{ __html: data.contentHtml }}
            ></div>
          );
        })}
      </article>
    </div>
  );
}
