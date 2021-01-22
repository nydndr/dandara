import Head from "next/head";

import Hero from "../components/journal/Hero";
import QuickList from "../components/journal/QuickList";
import Footer from "../components/landing/Footer";

import ReactMarkdown from "react-markdown/with-html";
import { getSortedPosts } from "../utils/entries";
import { getEntriesQuantity } from "../utils/entries";
import { useTitle, useMeta } from "hoofd";

export default function WorkJournal({ posts, quantity }) {
	useTitle("Meu Journal");
	useMeta({
		name: "description",
		content: "Documentações pessoais sobre desenvolvimento e design.",
	});
	useMeta({
		name: "keywords",
		content: "Desenvolvimento, programação, design, ui, ux",
	});

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

			<QuickList />

			<main className="w-9/12 lg:w-7/12 m-auto">
				<section className="space-y-16 divide-y-2 divide-gray-100 divide-solid w-full">
					{posts.map(
						(
							{ frontmatter: { title, language }, content },
							index
						) => (
							<article key={index}>
								<p className="block font-fivo text-2xl lg:text-4xl text-yellowplus my-12">
									{title}
								</p>
								<section className="prose max-w-none prose-sm lg:prose-lg prose-blue font-manrope">
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
