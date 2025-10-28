import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

export async function getLatestUpdate() {
  const filePath = path.join(process.cwd(), "src/content/now/now.mdx");
  const fileContent = fs.readFileSync(filePath, "utf8");

  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return { contentHtml, ...matterResult.data };
}
