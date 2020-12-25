import SocialLink from "../components/SocialLink.js";

import Link from "next/link";
import Head from "next/head";

import Projects from "../components/landing/Projects";
import JournalCTA from "../components/landing/JournalCTA";

function HomePage() {
	return (
		<>
			<section
				id="landing"
				className="flex flex-row h-screen w-full items-center"
			>
				<div>
					<h1 className="font-fivo leading-none text-16xl text-black ">
						eu sou
					</h1>
					<h1 className="font-fivo leading-none text-16xl text-black ">
						nicoly
					</h1>
					<h1 className="font-fivo leading-none text-16xl text-black ">
						dandara
					</h1>
				</div>

				<div>
					<h4 className="font-manrope text-2xl">
						Apaixonada por tipografia, pela construção da web e{" "}
						<span className="rolling">role pra baixo</span> para
						saber o que mais.
					</h4>
				</div>
			</section>

			<section className="grid grid-cols-2 h-screen w-full">
				<div></div>
				<div className="flex self-center px-3">
					<h3 className="font-manrope text-4xl tracking-wide leading-snug">
						Técnica em Informática pelo CEFET-MG usando
						conhecimentos de Javascript e UI/UX pra transformar
						ideias em realidade.
					</h3>
				</div>
			</section>

			<JournalCTA />
			<Projects />

			<section className="w-full h-screen grid grid-rows-3"></section>
		</>
	);
}

export default HomePage;
