import SocialCTA from "./SocialCTA";

export default function Hero() {
	return (
		<section id="landing" className="flex flex-row h-screen items-center">
			<div>
				<h1
					style={{ lineHeight: "80%", transform: "translate(-5%)" }}
					className="font-fivo leading-none text-16xl text-black yellow-stroke"
				>
					eu sou
				</h1>
				<h1
					style={{ lineHeight: "80%", transform: "translate(5%)" }}
					className="font-fivo leading-none text-16xl text-black yellow-stroke"
				>
					nicoly
				</h1>
				<h1
					style={{ lineHeight: "80%", transform: "translate(-5%)" }}
					className="font-fivo leading-none text-16xl text-black yellow-stroke"
				>
					dandara
				</h1>
			</div>

			<div className="px-6 space-y-8">
				<h4 className="font-manrope text-xl leading-relaxed">
					Eu sou uma Desenvolvedora com forte interesse em
					Desenvolvimento Web e UI/UX design. Aqui você encontra meus
					projetos, minhas falações e muita exaltação ao brutalismo.
				</h4>
				<SocialCTA />
				<span className="rolling font-manrope text-lg">
					{" "}
					role pra baixo
				</span>
			</div>
		</section>
	);
}
