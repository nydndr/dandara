import { MDXRemote } from "next-mdx-remote";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

export default async function Page({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/blog/" + slug);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHTML = processedContent.toString();

  return (
    <>
      <header>
        <div></div>
      </header>
      <div
        className="prose prose-a:underline-offset-2 prose-em:text-gray-700/40 prose-h1:tracking-tight"
        dangerouslySetInnerHTML={{ __html: contentHTML }}
      ></div>
    </>
  );
}

export function generateStaticParams() {
  return [{ slug: "work" }, { slug: "projects" }];
}

export const dynamicParams = true;
