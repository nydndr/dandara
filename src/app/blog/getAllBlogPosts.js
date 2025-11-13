import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

function extractBlogPost(postDirectory, postFileName, postIndex) {
  const postContent = fs.readFileSync(path.join(postDirectory, postFileName));

  const postMetadata = matter(postContent).data;

  const postObject = {
    status: postMetadata.status,
    source: postMetadata.source,
    live: postMetadata.live,
    created_at: postMetadata.created_at,
    updated_at: postMetadata.updated_at,
    portuguese: postMetadata.portuguese,
    translation: postMetadata.translation,
    title: postMetadata.title,
    tags: postMetadata.tags,
    file_name: postFileName,
    post_index: postIndex,
  };

  return postObject;
}

export async function getAllBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "src/content/blog");
  const allPostsNames = fs.readdirSync(postsDirectory);

  const allPostsIndexed = [];

  allPostsNames.forEach((postFileName, postIndex) => {
    if (postFileName.includes(".mdx") == false) {
      const deepPostDirectory = path.join(
        process.cwd(),
        "src/content/blog/" + postFileName,
      );
      const allDeepPostsNames = fs.readdirSync(deepPostDirectory);

      allDeepPostsNames.forEach((deepPostFileName, deepPostIndex) => {
        const extractedContentDeepPost = extractBlogPost(
          deepPostDirectory,
          deepPostFileName,
          postIndex,
        );

        allPostsIndexed.push(extractedContentDeepPost);
      });
    } else {
      const extractedContent = extractBlogPost(
        postsDirectory,
        postFileName,
        postIndex,
      );

      allPostsIndexed.push(extractedContent);
    }
  });

  return allPostsIndexed;
}
