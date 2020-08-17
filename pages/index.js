import Bio from "../components/Bio";
import React, { useState } from "react";

import Footer from "../components/Footer";
import Link from "next/link";

function HomePage() {
	const [bioLevel, setbioLevel] = useState(1);

	return (
		<>
			<section className="landing h-screen flex flex-col justify-center items-center">
				<Bio level={bioLevel} />
				<button onClick={() => setbioLevel(bioLevel + 1)}>
					Click Me
				</button>
			</section>

			<section className="call to-portfolio px-48 py-12 space-y-40">
				<div class="flex flex-col">
					<p className="font-coda text-lg pb-4 text-gray-800">
						O que eu faço?
					</p>
					<p className="font-coda text-xl w-9/12 leading-loose pb-6">
						Um adivinha de aniversário de namoro? Um querido diário?
						Uma extensão para o Chrome?
					</p>
					<p className="font-sans font-light text-xl w-7/12 font-gray-900 leading-loose">
						Uma aversão por tutoriais de aplicativos de tarefa me
						levou a execução de projetos inusitados para aprender as
						tecnologias que eu sei hoje.
					</p>
					<Link href="/projects" passHref>
						<a className="font-coda text-primary text-2xl self-end pt-6">
							Meus projetos
						</a>
					</Link>
				</div>

				<div className="flex flex-col">
					<p className="font-coda text-lg pb-4 text-gray-800">
						Onde eu faço?
					</p>
					<p className="font-coda text-xl w-9/12 leading-loose pb-6">
						Eu acredito que aprender em público é a forma mais
						eficiente - e divertida - de aprender.
					</p>
					<Link href="/workjournal" passHref>
						<a className="font-coda text-secondary text-2xl self-end pt-6">
							Leia meus diários secretos
						</a>
					</Link>
					<Link href="/" passHref>
						<a className="font-coda text-secondary text-2xl self-end pt-6">
							Acompanhe meus 100 dias de aprendizado
						</a>
					</Link>
				</div>

				<div className="flex flex-col">
					<p className="font-coda text-xl pb-4 text-gray-800">
						Você prefere Nicoly ou Dandara?
					</p>
					<p className="font-light text-2xl leading-loose pb-6">
						A essa altura do campeonato nem eu sei mais.<br></br>
						Nome composto == variedade. <br></br> Se escrever
						corretamente, eu juro que eu respondo.
					</p>
				</div>
			</section>

			<div>
				<Footer
					leadText="Quer saber ainda mais?"
					callToAction="Me chama pra conversar."
					arrayLinks={[
						"github",
						"behance",
						"twitter",
						"linkedin",
						"email",
					]}
				></Footer>
			</div>
		</>
	);
}

export default HomePage;
