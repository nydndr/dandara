import Head from "next/head";

import Nav from "../components/Nav";
import Code from "../components/Code";

import ReactMarkdown from "react-markdown/with-html";
import { getSortedPosts } from "../utils/posts";

export default function WorkJournal({ posts }) {
	return (
		<>
			<Head>
				<title>Dandara's Journal</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

			<Nav page={"workjournal"} />

			<section className="w-10/12 lg:w-7/12 m-auto lg:mt-16 mt-4 space-y-16">
				{posts.map(({ frontmatter: { title, language }, content }) => (
					<article>
						<Code postTitle={title} postLanguage={language} />
						<section className="prose m-auto">
							<ReactMarkdown
								escapeHtml={false}
								source={content}
							/>
						</section>
					</article>
				))}
			</section>
		</>
	);
}

export async function getStaticProps() {
	const posts = getSortedPosts();

	return {
		props: {
			posts,
		},
	};
}
