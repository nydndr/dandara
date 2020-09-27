import Head from "next/head";

import Footer from "../components/Footer.js";

export default function Portfolio() {
	const linkstorender = ["github", "behance", "email", "linkedin"];

	return (
		<>
			<Head>
				<title>Portfólio | Nicoly Dandara</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>

			<div className="w-10/12 m-auto space-y-4 my-20">
				<h1 className="font-coda text-3xl lg:text-5xl font-semibold">
					<span className="text-codegray">Desenvolvimento </span>
					Front-End.<wbr></wbr> UI/UX
					<span className="text-codegray"> Design.</span>
				</h1>

				<p className="font-sans text-xl font-regular lg:font-light">
					Meus melhores trabalhos (ou os que eu mais gosto de falar
					sobre).
				</p>
			</div>

			<section className="w-10/12 m-auto space-y-32">
				<article className="flex flex-col lg:flex-row">
					<div className="w-full lg:w-2/5 flex flex-col space-y-6 lg:space-y-0 lg:justify-between mb-4 lg:mb-0">
						<div>
							<h3 className="text-3xl font-semibold mb-4">
								Serase
							</h3>
							<div className="flex flex-row w-11/12 flex-wrap">
								<p className="bg-gray-300 p-1 px-2 mr-2">
									React Native
								</p>
								<p className="bg-gray-300 p-1 px-2 mr-2">
									Tailwind
								</p>
								<p className="bg-gray-300 p-1 px-2 mr-2">
									SQLite
								</p>
								<p className="bg-gray-300 p-1 px-2 mr-2">
									Expo
								</p>
							</div>
						</div>

						<p className="text-xl w-full lg:w-11/12">
							Gerenciamento financeiro para quem não conhece sua
							vida financeira. Didática, praticidade e
							inteligência para o seu dinheiro, na sua palma da
							sua mão.
						</p>
						<p className="text-xl text-right font-coda text-codegray w-full lg:w-11/12">
							Em desenvolvimento.
						</p>
					</div>
					<div
						className="showcase w-full lg:w-3/5 py-24 px-12 lg:p-4"
						style={{ backgroundColor: "#61FF00" }}
					>
						<img
							className="m-auto"
							src="images/SeraseShowcase.png"
						></img>
					</div>
				</article>

				<article className="flex flex-col lg:flex-row">
					<div className="w-full lg:w-2/5 flex flex-col space-y-6 lg:space-y-0 lg:justify-between mb-4 lg:mb-0">
						<div>
							<h3 className="text-3xl font-semibold mb-4">
								Distraction Journal
							</h3>
							<div className="flex flex-row w-11/12 flex-wrap">
								<p className="bg-gray-300 p-1 px-2 mr-2">
									Chrome Extension API
								</p>
								<p className="bg-gray-300 p-1 px-2 mr-2">
									Tailwind
								</p>
							</div>
						</div>

						<p className="text-xl w-full lg:w-11/12">
							Guarde suas distrações em segurança enquanto você
							navega pela internet e as acesse ao fim de um turno
							de trabalho.
						</p>
						<p className="text-xl text-right font-coda text-codegray w-full lg:w-11/12">
							<a
								className="itemLink"
								href="https://github.com/nydndr/distraction-journal"
							>
								Github
							</a>
						</p>
					</div>
					<div
						className="showcase w-full lg:w-3/5 py-24 px-12 lg:p-4"
						style={{ backgroundColor: "#FFC703" }}
					>
						<img
							className="m-auto"
							src="images/DistractionJournalShowcase.png"
						></img>
					</div>
				</article>

				<article className="flex flex-col lg:flex-row">
					<div className="w-full lg:w-2/5 flex flex-col space-y-6 lg:space-y-0 lg:justify-between mb-4 lg:mb-0">
						<div>
							<h3 className="text-3xl font-semibold mb-4">
								Sistema Escolar
							</h3>
							<div className="flex flex-row w-11/12 flex-wrap">
								<p className="bg-gray-300 p-1 px-2 mr-2">
									Javascript
								</p>
								<p className="bg-gray-300 p-1 px-2 mr-2">
									Java
								</p>
								<p className="bg-gray-300 p-1 px-2 mr-2">
									Ajax
								</p>
								<p className="bg-gray-300 p-1 px-2 mr-2">
									TSQL
								</p>
							</div>
						</div>

						<p className="text-xl w-full lg:w-11/12">
							Sistema de gerenciamento de alunos e de acervo de
							biblioteca. Meu subgrupo tratou do lançamento do
							sistema de avaliações; atividades; sistema de
							reservas.
						</p>
						<p className="text-xl text-right font-coda text-codegray w-full lg:w-11/12">
							<a
								className="itemLink"
								href="hhttps://github.com/INF2-2019"
							>
								Github
							</a>
						</p>
					</div>
					<div className="showcase bg-white w-full lg:w-3/5 py-24 px-12 lg:p-4">
						<img
							className="m-auto"
							src="images/SistemaShowcase.png"
						></img>
					</div>
				</article>

				<article className="flex flex-col lg:flex-row">
					<div className="w-full lg:w-2/5 flex flex-col space-y-6 lg:space-y-0 lg:justify-between mb-4 lg:mb-0">
						<div>
							<h3 className="text-3xl font-semibold mb-4">
								1000&1
							</h3>
							<div className="flex flex-row w-11/12 flex-wrap">
								<p className="bg-gray-300 p-1 px-2 mr-2">
									Javascript
								</p>
								<p className="bg-gray-300 p-1 px-2 mr-2">
									Tailwind
								</p>
								<p className="bg-gray-300 p-1 px-2 mr-2">
									Alpine.js
								</p>
								<p className="bg-gray-300 p-1 px-2 mr-2">
									Moment.js
								</p>
							</div>
						</div>

						<p className="text-xl w-full lg:w-11/12">
							Ninguém sabe quando completa 1000 dias de namoro. É
							uma conta complicada, mas muito importante e esse
							site cuida disso pra você.
						</p>
						<p className="text-xl text-right font-coda text-codegray w-full lg:w-11/12">
							<a
								className="itemLink"
								href="https://github.com/nydndr/1000-1"
							>
								Acesse
							</a>
						</p>
					</div>
					<div
						className="showcase w-full lg:w-3/5 py-24 px-12 lg:p-4"
						style={{ backgroundColor: "#FF6F5E" }}
					>
						<img
							className="m-auto"
							src="images/10001Showcase.png"
						></img>
					</div>
				</article>

				<article className="flex flex-col lg:flex-row">
					<div className="w-full lg:w-2/5 flex flex-col space-y-6 lg:space-y-0 lg:justify-between mb-4 lg:mb-0">
						<div>
							<h3 className="text-3xl font-semibold mb-4">
								@MaisQueChup
							</h3>
							<div className="flex flex-row w-11/12 flex-wrap">
								<p className="bg-gray-300 p-1 px-2 mr-2">
									Figma
								</p>
								<p className="bg-gray-300 p-1 px-2 mr-2">
									Canva
								</p>
							</div>
						</div>

						<p className="text-xl w-full lg:w-11/12">
							Assets para mídias sociais, cardápios, cartões e
							produtos de impressão rápida para uma marca
							deliciosa.
						</p>
						<p className="text-xl text-right font-coda text-codegray w-full lg:w-11/12">
							<a
								className="itemLink"
								href="https://www.instagram.com/maisquechup/"
							>
								MaisQueChup
							</a>
						</p>
					</div>
					<div
						className="showcase w-full lg:w-3/5 py-24 px-12 lg:p-4"
						style={{ backgroundColor: "#92014A" }}
					>
						<img
							className="m-auto"
							src="images/MaisQueChupShowcase.png"
						></img>
					</div>
				</article>
			</section>

			<div className="w-1/5 m-auto h-1 bg-gray-200 rounded-full my-32"></div>

			<Footer
				leadText={"Precisando dos meus serviços?"}
				callToAction={"Me chame por aí!"}
				arrayLinks={linkstorender}
			/>
		</>
	);
}
