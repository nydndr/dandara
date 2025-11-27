import { MDXRemote } from "next-mdx-remote/rsc";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { useMDXComponents } from "../../../components/mdx-components";

import ChangelogBadge from "@/components/ChangelogBadge";

const components = { ChangelogBadge };

export default async function BlogPost({ slug }) {
  const filePath = path.join(process.cwd(), "src/content/blog/" + slug);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const matterResult = matter(fileContent);

  const postMetadata = matterResult.data;
  const createdAt = new Date(postMetadata.created_at).toLocaleDateString(
    "en-us",
    {
      month: "long",
      year: "numeric",
    },
  );
  const updatedAt = new Date(postMetadata.updated_at).toLocaleDateString(
    "en-us",
    {
      month: "long",
      year: "numeric",
    },
  );

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHTML = processedContent.toString();
  return (
    <div className="mx-auto my-12 space-y-12 font-sans md:max-w-4xl">
      <header className="space-y-4">
        <div>
          <div className="text-lg font-bold tracking-tighter text-stone-700">
            <Link
              href="/"
              className="text-stone-700/20 transition-all hover:text-stone-700"
            >
              Dandara \
            </Link>
            <Link
              href="/blog"
              className="text-stone-700/20 transition-all hover:text-stone-700"
            >
              Blog \
            </Link>
          </div>
          <h1 className="text-lg font-bold tracking-tighter md:text-4xl">
            {postMetadata.title}
          </h1>

          <h2 className="text-gray-700 md:w-4/5 md:text-xl md:leading-10">
            {postMetadata.description}
          </h2>

          {postMetadata.live == true ? (
            <p className="font-mono font-medium text-gray-700/70 uppercase">
              {updatedAt}
            </p>
          ) : (
            <p className="font-mono font-medium text-gray-700/30 uppercase">
              {createdAt}
            </p>
          )}
        </div>
      </header>

      <article className="prose font-work prose-headings:font-sans">
        <MDXRemote components={components} source={matterResult.content} />
      </article>

      <footer className="my-20 space-y-6">
        <div className="flex flex-col items-end justify-end md:flex-row md:items-center">
          <Link
            href="/blog"
            className="left-arrow rounded-md px-2 py-2 whitespace-nowrap text-stone-700/70 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:px-5 hover:text-(--foreground) hover:opacity-100"
          >
            See more posts
          </Link>
        </div>
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
