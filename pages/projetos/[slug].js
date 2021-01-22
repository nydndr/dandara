import { getAllProjects, getProjectBySlug } from "../../utils/projects";

import ReactMarkdown from "react-markdown/with-html";
import { useTitle, useMeta, useLang } from "hoofd";

export default function Project(props) {
	console.log(props.data);
	useTitle(props.data.title);
	return (
		<div>
			<h1>{props.title}</h1>
			<section className="prose">
				<ReactMarkdown escapeHtml={false} source={props.content} />
			</section>
		</div>
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
