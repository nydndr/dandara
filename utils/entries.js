import matter from "gray-matter";
// Library thar handles metadata on markdown files
import fs from "fs";

function getFormattedDate(date) {
	const options = { year: "numeric", month: "long", day: "numeric" };
	const formattedDate = date.toLocaleDateString("en-US", options);

	return formattedDate;
}

export function getSortedPosts() {
	// Get all posts located in `content/posts`
	const files = fs.readdirSync(`${process.cwd()}/content/entries`);
	// cwd => current working directory
	const posts = files
		.map((filename) => {
			// Get raw content from file
			const markdownWithMetadata = fs
				.readFileSync(`content/entries/${filename}`)
				.toString();

			// Parse the file to get frontmatter data and markdown content
			const { data, content } = matter(markdownWithMetadata);

			const frontmatter = {
				...data,
				date: getFormattedDate(data.date),
			};

			return {
				frontmatter,
				content,
			};
		})
		.sort(
			(a, b) =>
				new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
		);

	return posts;
}

export function getEntriesQuantity() {
	// Get all posts located in `content/posts`
	const files = fs.readdirSync(`${process.cwd()}/content/entries`);
	// cwd => current working directory

	const quantity = files.length;

	return quantity;
}
