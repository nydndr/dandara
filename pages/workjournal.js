import Head from "next/head";

import Code from "../components/journal/Header";
import Footer from "../components/Footer";

import ReactMarkdown from "react-markdown/with-html";
import { getSortedPosts } from "../utils/posts";
import { getPostQuantity } from "../utils/posts";

export default function WorkJournal({ posts, quantity }) {
	const linkstorender = ["github", "twitter"];

	return (
		<>
			<Head>
				<title>Dandara's Journal</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>

			<div className="w-10/12 m-auto mt-12 mb-20">
				<h1 className="font-coda text-5xl font-semibold">
					<span className="text-codegray">{quantity} semanas</span>
					<br></br>
					documentadas.
				</h1>
				<p className="font-sans text-xl font-light">
					O que eu fiz, aprendi e gostei sobre design e
					desenvolvimento em dose semanais.
				</p>
			</div>

			<main className="lg:mt-4 w-full">
				<section className="space-y-16 w-full">
					{posts.map(
						(
							{ frontmatter: { title, language }, content },
							index
						) => (
							<article
								key={index}
								className="flex flex-col lg:flex-row w-10/12 m-auto space-y-12 lg:space-x-12"
							>
								<Code
									postTitle={title}
									postLanguage={language}
								/>
								<section className="prose max-w-none w-full lg:w-3/4">
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

			<div className="w-1/5 m-auto h-1 bg-gray-200 rounded-full my-16"></div>
			<Footer
				leadText={"uau, você realmente leu isso tudo?"}
				callToAction={
					"Se ainda não se cansou de ouvir sobre o que eu faço, me encontre por aí."
				}
				arrayLinks={linkstorender}
			/>
		</>
	);
}

export async function getStaticProps() {
	const posts = getSortedPosts();
	const quantity = getPostQuantity();

	return {
		props: {
			posts,
			quantity,
		},
	};
}
