export default function Code({ postTitle, postLanguage }) {
	const colors = ["#61FF00", "#FFC703", "#92014A"];
	const randomChoice = Math.floor(Math.random() * 3);

	return (
		<header className="space-y-6">
			<p
				className="block font-coda text-xl font-semibold"
				style={{ color: colors[randomChoice] }}
			>
				{postTitle}
			</p>
			<p className="block font-coda text-lg text-codegray">
				{postLanguage == "en"
					? "language: english"
					: "idioma: português"}
			</p>
		</header>
	);
}
