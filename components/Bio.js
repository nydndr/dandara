export default function Bio({ level }) {
	const bioText = [
		"Hi, I'm Nicoly.",
		"Eu sou aluna de computação, então, eu programo ",
		"I like good music, therefore I stan Beyoncé",
		`And... oh yeah, I tweet `,
	];

	switch (level) {
		case 1:
			return (
				<div className="text-xl font-coda  p-4 pt-0 leading-loose">
					{bioText.map((lineoftext, index) => (
						<p>
							<span className="text-gray-700 inline-block w-6 text-right">
								{index + 1}
							</span>{" "}
							{lineoftext}
						</p>
					))}
				</div>
			);
			break;
		case 2:
			return (
				<div className="text-xl p-4 pt-0 leading-loose">
					<p>You</p>
					<p>Are</p>
					<p>Genius</p>
				</div>
			);
			break;
	}
}
