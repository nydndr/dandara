import Header from "./Header";
import Content from "./Content";

export default function Project({ item }) {
	return (
		<article className="w-10/12 m-auto">
			<Header
				title={item.title}
				coverColor={item.color}
				imgPath={item.img}
			/>

			<Content
				content={item.content}
				motif={"CEFET"}
				tools={["React Native", "Bingo"]}
			/>
		</article>
	);
}
