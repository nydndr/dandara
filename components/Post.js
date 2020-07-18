import ReactMarkdown from "react-markdown/with-html";

import Layout from "./Layout";
import { getPostBySlug, getPostsSlugs } from "../utils/posts";

export default function Post({ post, frontmatter }) {
	return (
		<Layout>
			<SEO
				title={frontmatter.title}
				description={frontmatter.description || post.excerpt}
			/>

			<article>
				<header>
					<h1 className="my-0">{frontmatter.title}</h1>
					<p className="text-xs">{frontmatter.date}</p>
				</header>
				<article className="prose lg:prose-xl">
					<ReactMarkdown
						className="prose lg:prose-xl"
						escapeHtml={false}
						source={post.content}
					/>
				</article>
			</article>
		</Layout>
	);
}

/* export async function getStaticPaths() {
	const paths = getPostsSlugs();

	return {
		paths,
		fallback: false,
	};
}*/

export async function getStaticProps({ params: { slug } }) {
	const postData = getPostBySlug(slug);

	return { props: postData };
}
