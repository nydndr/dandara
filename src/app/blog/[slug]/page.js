import { MDXRemote } from "next-mdx-remote";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/blog/" + slug);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const matterResult = matter(fileContent);

  const postMetadata = matterResult.data;

  return {
    title: postMetadata.title,
    description: postMetadata.description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
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
    <div className="mx-auto my-12 font-sans md:max-w-4xl">
      <header className="space-y-4">
        <div>
          <h1 className="text-lg font-bold tracking-tight md:text-4xl">
            {postMetadata.title}
          </h1>

          <h2 className="text-gray-700 md:w-4/5 md:text-2xl md:text-xl md:leading-10">
            {postMetadata.description}
          </h2>
        </div>

        {postMetadata.live == true ? (
          <>
            <div className="justify-between space-y-4 font-mono font-medium md:my-6 md:flex md:space-y-6">
              <div>
                <p className="font-mono text-sm font-medium text-gray-700/30 uppercase md:text-base">
                  <span className="normal-case">First posted at </span>
                  {createdAt}
                </p>

                <p className="font-mono text-sm font-medium text-gray-700/70 uppercase">
                  <span className="normal-case">Last updated at </span>
                  {updatedAt}
                </p>
              </div>

              <div className="flex flex-col items-center gap-2 md:items-end">
                <div className="live-post-signal bold hover:text(--foreground) flex w-fit items-center space-x-4 rounded-full border-1 border-gray-200 bg-gray-200/30 px-4 py-2">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--dandara) opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-(--dandara)"></span>
                  </span>
                  <p className="font-mono text-xs tracking-tight md:text-base">
                    This is a live post
                  </p>
                </div>

                <div className="live-post-tip z-10 hidden w-64 rounded-md border-1 border-gray-200 bg-gray-200/30 px-4 py-2 text-center text-sm font-normal">
                  <p>
                    A live post is a living document for ideas I am currently
                    working on.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="my-4 flex font-mono font-medium">
              <p className="font-mono font-medium text-gray-700/30 uppercase">
                {createdAt}
              </p>
            </div>
          </>
        )}
      </header>
      <div
        className="blogpost prose"
        dangerouslySetInnerHTML={{ __html: contentHTML }}
      ></div>
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "work" }, { slug: "projects" }];
}

export const dynamicParams = true;
