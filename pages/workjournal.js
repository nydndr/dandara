import Head from "next/head";

import Code from "../components/Code";
import Footer from "../components/Footer";

import ReactMarkdown from "react-markdown/with-html";
import { getSortedPosts } from "../utils/posts";

export default function WorkJournal({ posts }) {
	const linkstorender = ["github", "twitter"];

	return (
		<>
			<Head>
				<title>Dandara's Journal</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

			<main
				style={{ scrollSnapAlign: "start" }}
				className="w-10/12 lg:w-1/2 m-auto lg:mt-4"
			>
				<p className="text-lg text-gray-900 my-12">
					The best things I've been doing, learning or liking a lot
					from the past 88 weeks.
				</p>

				<section className="space-y-16">
					{posts.map(
						({ frontmatter: { title, language }, content }) => (
							<article>
								<Code
									postTitle={title}
									postLanguage={language}
								/>
								<section className="prose max-w-none">
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

			<div style={{ scrollSnapAlign: "start" }}>
				<Footer
					leadText={"wow, did you really read all this?"}
					callToAction={"here’s what i’m doing daily then:"}
					arrayLinks={linkstorender}
				/>
			</div>
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
