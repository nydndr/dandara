import "../styles/main.css";
import { useTitle, useTitleTemplate, useMeta, useLang } from "hoofd";

function MyApp({ Component, pageProps }) {
	useTitleTemplate("Nicoly Dandara | %s");
	useLang("pt-br");
	useMeta({ name: "author", content: "Nicoly Dandara" });

	useTitle("Inicio");
	useMeta({
		name: "description",
		content: "Desenvolvedora de Software e UI/UX Designer",
	});
	useMeta({
		name: "keywords",
		content: "Desenvolvimento, programação, design, ui, ux",
	});

	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
