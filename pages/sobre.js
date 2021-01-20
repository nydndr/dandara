import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/landing/Footer";
import { useTitle, useTitleTemplate, useMeta, useLang } from "hoofd";

export default function Sobre() {
	useTitle("Sobre Mim");
	useMeta({
		name: "description",
		content: "Um pouco sobre mim.",
	});
	useMeta({
		name: "keywords",
		content: "Desenvolvedora, programadora, designer, ui, ux",
	});

	return (
		<>
			<Navbar />
			<section className="flex flex-col md:flex-row w-10/12 m-auto my-24 md:my-48 md:gap-24">
				<img
					className="md:w-5/12 py-7 md:py-0"
					src="static/images/profile.png"
				></img>

				<div className="space-y-7">
					<h6 className="font-fivo text-2xl md:text-4xl md:leading-relaxed">
						Eu sou Nicoly, desenvolvedora de software com um apreço
						acima da média por design e tipografia.
					</h6>
					<div className="space-y-6">
						<p className="font-manrope text-base md:text-2xl leading-loose md:leading-relaxed">
							Estudo programação web desde os meus 14 anos e hoje
							carrego um currículo técnico em desenvolvimento de
							software pelo CEFET-MG e múltiplos conhecimentos
							adquiridos de maneira autodidata.
						</p>
						<p className="font-manrope text-base md:text-2xl leading-loose md:leading-relaxed">
							Passo meus dias desenvolvendo projetos, do início
							(idealização) ao fim (desenvolvimento), passando
							também pelo design nessa jornada.
						</p>
						<p className="font-manrope text-base md:text-2xl leading-loose md:leading-relaxed">
							Meus momentos ociosos são passados construindo
							relações complexas no The Sims ou pesquisando
							assuntos interessantes, como{" "}
							<a
								href="https://pudding.cool/2020/11/crossword/?ref=sidebar"
								className="underline"
							>
								o quão político é o mundo das palavras cruzadas
							</a>
							.
						</p>
					</div>
				</div>
			</section>

			<section className="w-10/12 m-auto grid grid-flow-rows gap-6 md:grid-rows-2 md:grid-cols-2 my-24 md:my-48 overflow-hidden">
				<div className="space-y-7">
					<h6 className="font-fivo text-2xl md:text-4xl md:leading-relaxed">
						Desenvolvimento
					</h6>
					<div className="space-y-6">
						<p className="font-manrope text-base md:text-2xl leading-relaxed md:leading-loose">
							Considero a programação um superpoder. Poucas
							habilidades te dão tanta velocidade para transformar
							uma ideia em realidade quanto a programação.
						</p>
						<p className="font-manrope text-base md:text-2xl leading-relaxed md:leading-loose">
							Mas velocidade de produção não implica em bons
							produtos, experiência final e consciência de
							escalabildiade sim. Por isso, esses são meus guias
							de desenvolvimento.
						</p>
					</div>
				</div>
				<div className="hidden md:block">
					<div className="w-full h-full flex items-center justify-center">
						<p
							style={{
								transform: "translate(75%)",
							}}
							className="font-fivo text-5xl lg:text-16xl gray-stroke cursor-pointer text-white opacity-25 border-black"
						>
							dev
						</p>
					</div>
				</div>
				<div className="hidden md:block">
					<div className="w-full h-full flex items-center justify-center">
						<p
							style={{
								transform: "translate(-50%)",
							}}
							className="font-fivo text-5xl lg:text-16xl gray-stroke cursor-pointer text-white opacity-25 border-black"
						>
							ui/ux
						</p>
					</div>
				</div>

				<div className="space-y-7">
					<h6 className="font-fivo text-2xl md:text-4xl md:leading-relaxed">
						Design
					</h6>
					<div className="space-y-6">
						<p className="font-manrope text-base md:text-2xl leading-relaxed md:leading-loose">
							Com o superpoder de transformar ideas em realidade,
							vem a responsabilidade de garantir que essa
							realidade é uma boa experiência pra quem a vive.
						</p>
						<p className="font-manrope text-base md:text-2xl leading-relaxed md:leading-loose">
							O design de interface e de usuário me colocam ainda
							mais próxima do usuário final que o desenvolvimento
							front-end.
						</p>
					</div>
				</div>
			</section>

			<section className="w-full bg-yellow py-12 px-6 lg:px-12">
				<p className=" font-manrope text-white text-right md:font-semibold tracking-wider mb-12">
					Habilidades
				</p>
				<p className="font-manrope font-semibold text-2xl md:text-6xl leading-relaxed md:leading-loose">
					Git, HTML, CSS, Javascript, Typescript, React, React Native,
					Next, Java, Python, SQL, TailwindCSS, GSAP, Figma, UI, UX
				</p>
			</section>

			<section className="py-24 md:py-48">
				<div className="text-center space-y-6">
					<p className="font-manrope text-base md:text-2xl leading-relaxed">
						Estou procurando por um estágio em desenvolvimento.
					</p>
					<Link href="/resume">
						<h2 className="font-fivo text-4xl md:text-9xl yellow-stroke cursor-pointer go">
							currículo
						</h2>
					</Link>
				</div>
			</section>

			<Footer />
		</>
	);
}
