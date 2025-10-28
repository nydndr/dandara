import Link from "next/link";

import { getLatestUpdate } from "./getLatestUpdate";

export const metadata = {
  title: "Now",
  description: "What I am working on right now.",
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
        <div className="space-y-2">
          <h2 className="text-xl font-medium text-gray-700 md:text-3xl md:leading-10">
            This is a summary of{" "}
            <span className="textmarker-effect-auto whitespace-nowrap">
              where I'm putting my energy
            </span>{" "}
            right now.
          </h2>
          <h3 className="text-lg font-medium text-gray-700/40 md:leading-9">
            Read more about{" "}
            <Link
              href="https://nownownow.com/about"
              className="underline underline-offset-2"
            >
              Now
            </Link>{" "}
            pages
          </h3>
        </div>
      </section>
      <article className="mt-16">
        {getLatestUpdate().then((data) => {
          return (
            <div
              className="prose prose-a:underline-offset-2 prose-em:text-gray-700/40 prose-h1:tracking-tight"
              dangerouslySetInnerHTML={{ __html: data.contentHtml }}
            ></div>
          );
        })}
      </article>
    </div>
  );
}
