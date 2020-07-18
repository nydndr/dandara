import Link from "next/link";
import Head from "next/head";

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
			<nav>
				<div className="hover:text-primary">
					<Link href="/">
						<a className="hand back transition"></a>
					</Link>
				</div>
			</nav>
			<h1 className="uppercase font-condensed text-5xl text-primary text-center my-12">
				Work Journal
			</h1>

			<section className="w-4/5 lg:w-2/3 m-auto space-y-12">
				{posts.map(({ frontmatter: { title }, content }) => (
					<article>
						<header>
							<h2 className="font-mono uppercase border-secondary border-b border-t py-1 my-8">
								{title}
							</h2>
						</header>
						<section className="prose m-auto">
							<ReactMarkdown
								escapeHtml={false}
								source={content}
							/>
						</section>
					</article>
				))}
			</section>

			<footer className="my-10 text-center">
				<p className="text-tertiary italic">You're up to date!</p>
			</footer>
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
