import Navbar from "../components/Navbar";
import Footer from "../components/landing/Footer";

import { useTitle, useTitleTemplate, useMeta, useLang } from "hoofd";

export default function Curriculo() {
	useTitle("Currículo");
	useMeta({ name: "description", content: "Meu currículo profissional." });
	useMeta({
		name: "keyboards",
		content: "desenvolvedora, estágio, frontend, junior",
	});

	return (
		<>
			<Navbar />
			<div className="w-10/12 xl:w-7/12 m-auto font-manrope">
				<header className="flex flex-col md:flex:row space-y-6 my-12 md:my-24">
					<div className="space-y-4">
						<p className="text-4xl md:text-6xl font-semibold">
							Nicoly Dandara
						</p>
						<p className="uppercase tracking-widest text-sm md:text-base font-semibold text-orange">
							Desenvolvedora de Software
						</p>
					</div>

					<div className="flex w-full justify-between items-center space-x-4 md:space-x-6">
						<p className="text-xs md:text-base w-10/12 text-right">
							Para mais informações, entre em contato
						</p>
						<a
							href="mailto:nicolydndr@gmail.com?subject:Email advindo do curriculo"
							className="w-10 h-10 md:w-16 md:h-16 bg-yellowplus rounded-full"
						></a>
					</div>
				</header>

				<main className="flex flex-col md:flex-row space-y-6 md:space-y-0 my-12 md:my-24">
					<div className="space-y-12 md:space-y-24">
						<section className="space-y-4">
							<p className="uppercase tracking-widest font-semibold text-orange">
								Perfil Pessoal
							</p>
							<p className="w-10/12 lg:w-8/12">
								Eu sou uma desenvolvedora de software com apreço
								por desenvolvimento Front-End. Trago habilidades
								de design e comunicação para a tecnologia,
								produzindo em equipe e prezando por aprender em
								todos os contextos.
							</p>
						</section>

						<section className="space-y-4">
							<p className="uppercase tracking-widest font-semibold text-orange">
								Tecnologias
							</p>
							<ul className="space-y-4 text-sm md:text-base">
								<li>HTML</li>
								<li>CSS</li>
								<li>Javascript</li>
								<li>Reacct</li>
								<li>Git</li>
								<li>Python</li>
								<li>Java</li>
							</ul>
						</section>

						<section className="space-y-4">
							<p className="uppercase tracking-widest font-semibold text-orange">
								Línguas
							</p>
							<ul className="space-y-4 text-sm md:text-base">
								<li>Português Nativo</li>
								<li>Inglês Fluente</li>
							</ul>
						</section>
					</div>

					<div className="space-y-12">
						<section className="space-y-4">
							<p className="uppercase tracking-widest font-semibold text-orange">
								Educação
							</p>
							<article className="space-y-4">
								<p className="font-semibold text-base md:text-lg">
									Centro Federal de Educação Tecnológica -
									CEFET-MG
								</p>
								<div className="flex text-xs md:text-base justify-between">
									<p>Belo Horizonte, MG</p>
									<p>Jan 2017 - Abril 2021</p>
								</div>

								<p className="font-semibold text-sm md:text-base">
									Técnica em Informática e Ensino Médio
									Integrado
								</p>
								<p className="text-sm md:text-base">
									<span className="font-semibold">
										Currículo Técnico:
									</span>{" "}
									Algoritmos e Lógica de Programação,
									Linguagens de Propgramação I e II,
									Aplicações para WEB, Projetos de Sistema,
									Banco de Dados
								</p>
							</article>
						</section>

						<section className="space-y-6">
							<p className="uppercase tracking-widest font-semibold text-orange">
								Projetos
							</p>
							<article className="space-y-4">
								<p className="font-semibold text-lg">Serase</p>
								<ul className="list-inside list-disc text-sm md:text-base">
									<li>
										Desenvolvimento de uma aplicação mobile
										utilizando React Native e Django que
										permite gerenciamento financeiro
										pessoal.
									</li>
									<li>
										Liderei uma equipe de 5 desenvolvedores
										no aprendizado da framework React
										Native.
									</li>
									<li>
										Desenvolvi as interfaces e recursos
										gráficos da aplicação, realizando um
										handoff do design para o
										desenvolvimento.
									</li>
								</ul>
								<p className="text-sm md:text-base">
									Utilizei: HTML, CSS, Javascript, React
									Native, Context API, Python, Django, Expo,
									React Navigation, Formik, Yup
								</p>
							</article>

							<article className="space-y-4">
								<p className="font-semibold text-lg">
									Site Pessoal
								</p>
								<ul className="list-inside list-disc text-sm md:text-base">
									<li>
										Desenhei e desenvolvi um website React
										na framework Next para abrigar meus
										projetos e progresso no mundo do
										desenvolvimento.
									</li>
									<li>
										Integrei um sistema de postagem
										alimentado por arquivos markdown.
									</li>
									<li>
										Trabalho continuamente na melhoria de
										perfomance e acessibilidade do website.
									</li>
								</ul>
								<p className="text-sm md:text-base">
									Utilizei: HTML, CSS, Javascript, React,
									Next, PostCSS, TailwindCSS, Markdown, GSAP
								</p>
							</article>
						</section>
					</div>
				</main>
			</div>

			<Footer />
		</>
	);
}
