import matter from "gray-matter";
import fs from "fs";

export function getAllProjects() {
	const files = fs.readdirSync(`${process.cwd()}/content/projects`);

	const projects = files.map((filename) => {
		const markdownWithMetadata = fs
			.readFileSync(`content/projects/${filename}`)
			.toString();

		const { data, content } = matter(markdownWithMetadata);

		const frontmatter = { ...data };

		return { slug: filename.replace(".md", "") };
	});

	return projects;
}

export function getProjectBySlug(slug) {
	const fileContent = fs.readFileSync(
		`${process.cwd()}/content/projects/${slug}.md`
	);
	const { data, content } = matter(fileContent);

	return { data: data, content: content };
}
