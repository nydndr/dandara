import Link from "next/link";
import { useTitle, useTitleTemplate, useMeta, useLang } from "hoofd";

import { getAllProjects, getProjectBySlug } from "../../utils/projects";
import ReactMarkdown from "react-markdown/with-html";

import Navbar from "../../components/Navbar";
import QuickList from "../../components/journal/QuickList";
import Footer from "../../components/landing/Footer";

export default function Project(props) {
	useTitleTemplate("%s");
	useTitle(props.data.title);

	useMeta({
		name: "description",
		content: "Aplicação financeira para indivíduos de baixa renda.",
	});
	useMeta({
		name: "keywords",
		content: "React Native, mobile, app, finanças",
	});

	return (
		<>
			<Navbar />
			<div className="m-auto my-12 md:my-24 w-10/12 font-manrope space-y-24 md:space-y-24">
				<header className="text-center space-y-6 lg:space-y-12">
					<img
						className="m-auto bg-neutral p-4"
						src={props.data.main}
					></img>

					<h1 className="font-semibold text-2xl xl:text-6xl leading-relaxed md:leading-loose">
						{props.data.title}
					</h1>
					<h2 className="text-base lg:text-2xl xl:text-3xl leading-relaxed md:leading-loose">
						{props.data.introduction}
					</h2>

					<div className="flex items-center justify-center space-x-4 text-sm lg:text-xl">
						<Link href={props.data.link}>
							<p className="go cursor-pointer text-orange font-semibold">
								Acessar
							</p>
						</Link>
						<p className="rolling">continuar lendo</p>
					</div>
				</header>

				<main className="space-y-6 flex flex-col lg:flex-row md:w-8/12 lg:w-full m-auto lg:space-x-12">
					<aside>
						<img
							className="m-auto bg-neutral"
							src={props.data.aside}
						></img>
					</aside>
					<article className="prose max-w-none prose-sm md:prose-lg xl:prose-xl prose-yellow">
						<ReactMarkdown
							escapeHtml={false}
							source={props.content}
						/>
					</article>
				</main>
			</div>

			<QuickList text={"Visite outros projetos"} />

			<Footer />
		</>
	);
}

export async function getStaticProps(context) {
	return { props: await getProjectBySlug(context.params.slug) };
}

export async function getStaticPaths() {
	let paths = await getAllProjects();

	paths = paths.map((projects) => ({
		params: { slug: projects.slug },
	}));

	return { paths: paths, fallback: false };
}
