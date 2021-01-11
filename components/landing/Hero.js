import SocialCTA from "./SocialCTA";

export default function Hero() {
	return (
		<section
			id="landing"
			className="flex flex-col lg:flex-row h-screen items-center justify-center"
		>
			<div>
				<h1
					style={{ lineHeight: "80%", transform: "translate(-5%)" }}
					className="font-fivo leading-none text-5xl lg:text-16xl text-black yellow-stroke"
				>
					eu sou
				</h1>
				<h1
					style={{ lineHeight: "80%", transform: "translate(5%)" }}
					className="font-fivo leading-none text-5xl lg:text-16xl text-black yellow-stroke"
				>
					nicoly
				</h1>
				<h1
					style={{ lineHeight: "80%", transform: "translate(-5%)" }}
					className="font-fivo leading-none text-5xl lg:text-16xl text-black yellow-stroke"
				>
					dandara
				</h1>
			</div>

			<div className="w-10/12 space-y-8 mt-16 md:m-0">
				<h4 className="font-manrope text-base lg:text-xl tracking-wider w-full lg:w-10/12">
					Eu sou uma desenvolvedora com forte interesse em
					Desenvolvimento Web e UI/UX design. Aqui você encontra meus
					projetos, minhas falações e muita exaltação ao brutalismo.
				</h4>
				<SocialCTA />
				<span className="rolling font-manrope text-lg">
					role pra baixo
				</span>
			</div>
		</section>
	);
}
