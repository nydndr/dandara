import Link from "next/link";
import Head from "next/head";

import Navbar from "../components/Navbar";

import Footer from "../components/landing/Footer";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function HomePage() {
	return (
		<div className="font-manrope">
			<Navbar />

			<section>
				<div className="flex py-24 items-center space-x-4">
					<div>
						<h1 className="font-fivo leading-none text-xl md:text-6xl lg:text-9xl xl:text-16xl text-yellowplus md:text-black yellow-stroke transform -translate-x-1">
							tech
						</h1>
						<h1 className="font-fivo leading-none text-xl md:text-6xl lg:text-9xl xl:text-16xl text-yellowplus md:text-black yellow-stroke transform translate-x-2">
							dev
						</h1>
						<h1 className="font-fivo leading-none text-xl md:text-6xl lg:text-9xl xl:text-16xl text-yellowplus md:text-black yellow-stroke transform -translate-x-2">
							design
						</h1>
					</div>

					<div>
						<p className="text-base md:text-2xl leading-relaxed md:leading-loose">
							Olá, eu sou{" "}
							<span className="font-semibold">
								Nicoly Dandara
							</span>
							, Desenvolvedora de Sofrware localizada em Belo
							Horizonte e Sunset Valley.
						</p>
					</div>
				</div>
				<p className="rolling text-sm lg:text-xl text-yellowplus text-center w-full my-6 md:my-12">
					role pra baixo
				</p>
			</section>

			<section className="my-12 md:my-24 w-10/12 m-auto">
				<div className="space-y-6 md:space-y-12 flex flex-col justify-end">
					<p className="text-right font-manrope font-semibold tracking-wider">
						sobre mim
					</p>
					<p className="text-right text-base md:text-2xl leading-relaxed md:leading-loose">
						Técnica em Informática pelo CEFET-MG, usando
						conhecimentos de desenvolvimento web para transformar
						minhas ideias em realidade.
					</p>

					<Link href="/sobre">
						<p className="cursor-pointer call font-semibold text-sm md:text-base text-right">
							mais sobre mim
						</p>
					</Link>
				</div>
			</section>

			<section className="bg-yellowplus py-12 md:py-24">
				<div className="w-10/12 m-auto space-y-12">
					<p className="text-right font-manrope font-semibold tracking-wider">
						projetos
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 box-content gap-12 lg:gap-32">
						<div className="space-y-4 md:space-y-8">
							<img src="/static/images/SeraseMain.png"></img>
							<p className="font-semibold text-2xl xl:text-6xl leading-relaxed md:leading-loose">
								Serase
							</p>
							<p className="text-base lg:text-2xl xl:text-3xl sm:leading-relaxed md:leading-loose">
								Aplicação React Native
							</p>
							<Link href="/projetos/serase">
								<p className="cursor-pointer call font-semibold text-sm md:text-base">
									Ver mais
								</p>
							</Link>
						</div>

						<div className="space-y-4 md:space-y-8">
							<img src="/static/images/DandaraMain.png"></img>
							<p className="font-semibold text-2xl xl:text-6xl leading-relaxed md:leading-loose">
								Dandara
							</p>
							<p className="text-base lg:text-2xl xl:text-3xl sm:leading-relaxed md:leading-loose">
								Portfólio em Next.js
							</p>

							<p className="font-semibold text-sm md:text-base">
								Em escrita
							</p>
						</div>

						<div className="space-y-4 md:space-y-8">
							<p className="font-fivo text-xl lg:text-4xl md:leading-relaxed">
								Mais desenvolvimento
							</p>
							<Link href="https://github.com/nydndr">
								<p className="cursor-pointer call font-semibold text-sm md:text-base">
									Visite meu Gihub
								</p>
							</Link>
						</div>
						<div className="space-y-4 md:space-y-8">
							<p className="font-fivo text-xl lg:text-4xl md:leading-relaxed">
								Mais UI/UX
							</p>
							<Link href="https://www.instagram.com/ddedandara/">
								<p className="cursor-pointer call font-semibold text-sm md:text-base">
									Visite meu Instagram
								</p>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<JournalCTA />

			<div>
				<section className="lg:h-screen grid grid-rows-3 w-full md:w-10/12 m-auto md:gap-6 xl:gap-0">
					<div>
						<Link href="/projetos/serase">
							<h2 className="font-fivo text-4xl lg:text-9xl go cursor-pointer text-center md:text-left">
								projetos
							</h2>
						</Link>
					</div>
					<div>
						<Link href="/journal">
							<h2 className="font-fivo text-4xl lg:text-9xl text-center go cursor-pointer">
								journal
							</h2>
						</Link>
					</div>
					<div className="flex flex-row justify-end items-end text-center">
						<div>
							<Link href="/curriculo">
								<h2 className="font-fivo text-4xl lg:text-9xl text-yellowplus md:text-black yellow-stroke cursor-pointer">
									currículo
								</h2>
							</Link>
							<p className="text-base lg:text-2xl leading-relaxed md:leading-loose">
								Procuro por um estágio em desenvolvimento.
							</p>
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</div>
	);
}

function JournalCTA() {
	gsap.registerPlugin(ScrollTrigger);

	const ref = useRef(null);

	useEffect(() => {
		const element = ref.current;
		gsap.fromTo(
			element.querySelector(".dev"),
			{
				x: -100,
			},
			{
				x: 0,
				scrollTrigger: {
					trigger: element,
					start: "top top",
					end: "bottom center",
					scrub: false,
				},
			}
		);
	}, []);

	useEffect(() => {
		const element = ref.current;
		gsap.fromTo(
			element.querySelector(".design"),
			{
				x: 100,
			},
			{
				x: 0,
				scrollTrigger: {
					trigger: element,
					start: "top top",
					end: "bottom center",
					scrub: false,
				},
			}
		);
	}, []);

	return (
		<div className="overflow-hidden flex items-center justify-center h-full md:my-12">
			<section
				className="w-full grid-rows-3 box-border space-y-20 xl:space-y-40"
				ref={ref}
			>
				<div>
					<h2 className="text-3xl md:text-6xl  lg:text-16xl gray-stroke text-white opacity-50 border-black font-fivo w-full dev text-center">
						dev
					</h2>
				</div>
				<div className="space-y-6 md:space-y-12">
					<p className="m-auto text-center w-10/12 text-base md:text-2xl leading-relaxed md:leading-loose">
						Atualizações semanais sobre o meu aprendizado de novas
						tecnologias e fundamentos do Design e da Programação.
						Figma, React, C#...
					</p>
					<Link href="/journal">
						<p className="cursor-pointer call font-semibold text-sm md:text-base text-center">
							Leia meu journal
						</p>
					</Link>
				</div>
				<div>
					<h2 className="text-3xl md:text-6xl lg:text-16xl gray-stroke text-white opacity-50 border-black font-fivo w-full design text-center ">
						design
					</h2>
				</div>
			</section>
		</div>
	);
}

export default HomePage;
