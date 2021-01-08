import Head from "next/head";

import Hero from "../components/journal/Hero";
import Footer from "../components/landing/Footer";

import ReactMarkdown from "react-markdown/with-html";
import { getSortedPosts } from "../utils/entries";
import { getEntriesQuantity } from "../utils/entries";

export default function WorkJournal({ posts, quantity }) {
	return (
		<>
			<Head>
				<title>Dandara's Journal</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>

			<Hero postQuantity={quantity} />

			<main
				style={{ transform: "translateY(-0.1%)" }}
				className="w-7/12 m-auto"
			>
				<section className="space-y-16 divide-y-2 divide-gray-100 divide-solid w-full">
					{posts.map(
						(
							{ frontmatter: { title, language }, content },
							index
						) => (
							<article key={index} className="">
								<p className="block font-fivo text-4xl text text-yellowplus my-12">
									{title}
								</p>
								<section className="prose max-w-none prose-lg prose-blue">
									<ReactMarkdown
										escapeHtml={false}
										source={content}
									/>
								</section>
							</article>
						)
					)}
				</section>
			</main>

			<Footer />
		</>
	);
}

export async function getStaticProps() {
	const posts = getSortedPosts();
	const quantity = getEntriesQuantity();

	return {
		props: {
			posts,
			quantity,
		},
	};
}
