import Link from "next/link";

import { getLatestUpdate } from "./getLatestUpdate";

export const metadata = {
  title: "Now",
  description: "What Dandara is working on right now.",
};

export default async function NowPage() {
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
          Now
        </h1>

        <div className="space-y-1">
          <h3 className="text-xl font-medium md:w-4/5 md:text-2xl md:leading-10">
            This is a summary of where I'm investing my energy right now.
          </h3>

          <p>
            Read more about{" "}
            <Link
              href="https://nownownow.com/about"
              className="underline underline-offset-2 transition hover:bg-(--dandara)"
            >
              Now
            </Link>{" "}
            pages.
          </p>
        </div>
      </header>
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
