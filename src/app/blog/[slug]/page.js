import BlogPost from "../components/BlogPost";

// export async function generateMetadata({ params, searchParams }, parent) {
//   const { slug } = await params;
//   const filePath = path.join(process.cwd(), "src/content/blog/" + slug);
//   const fileContent = fs.readFileSync(filePath, "utf-8");

//   const matterResult = matter(fileContent);

//   const postMetadata = matterResult.data;

//   return {
//     title: postMetadata.title,
//     description: postMetadata.description,
//   };
// }

export default async function Page({ params }) {
  const { slug } = await params;

  return <BlogPost slug={slug}></BlogPost>;
}

export const dynamicParams = false; // true | false
