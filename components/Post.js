// This component renders markdown on the page.

import ReactMarkdown from "react-markdown/with-html";

import Layout from "./Layout";

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
					<ReactMarkdown escapeHtml={false} source={post.content} />
				</article>
			</article>
		</Layout>
	);
}
