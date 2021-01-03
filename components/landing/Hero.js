export default function Hero() {
	return (
		<section id="landing" className="flex flex-row h-screen items-center">
			<div>
				<h1
					style={{ lineHeight: "90%", transform: "translate(-5%)" }}
					className="font-fivo leading-none text-16xl text-black yellow-stroke"
				>
					eu sou
				</h1>
				<h1
					style={{ lineHeight: "90%", transform: "translate(5%)" }}
					className="font-fivo leading-none text-16xl text-black yellow-stroke"
				>
					nicoly
				</h1>
				<h1
					style={{ lineHeight: "90%", transform: "translate(-5%)" }}
					className="font-fivo leading-none text-16xl text-black yellow-stroke"
				>
					dandara
				</h1>
			</div>

			<div>
				<h4 className="font-manrope text-2xl">
					<span className="rolling"> role pra baixo</span>
				</h4>
			</div>
		</section>
	);
}
