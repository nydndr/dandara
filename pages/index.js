import Bio from "../components/Bio";
import React, { useState } from "react";

import Footer from "../components/Footer";
import Link from "next/link";

function HomePage() {
	return (
		<>
			<section className="landing flex flex-col items-center py-20 my-10">
				<div className="text-center w-1/2 space-y-8">
					<h1 className="text-6xl font-bold font-coda lowercase leading-none text-primary">
						Nicoly Dandara.
					</h1>
					{/* <div class="w-full h-1 bg-secondary rounded mt-2 mb-4"></div>
					 */}
					<p className="text-2xl font-sans ">
						Estudante de{" "}
						<span className="text-xl p-1 font-coda bg-gray-300 rounded">
							informática
						</span>{" "}
						, apreciadora de boas fontes e jogadora profissional de
						The Sims.
					</p>

					<div className="flex flex-row justify-center space-x-4 text-codegray">
						<a
							className="hover:text-secondary font-medium"
							href="https://github.com/nydndr"
							target="_blank"
						>
							github
						</a>
						<a
							className="hover:text-secondary font-medium"
							href="https://www.behance.net/nicolydandara"
							target="_blank"
						>
							behance
						</a>
						<a
							className="hover:text-secondary font-medium"
							href="https://www.twitter.com/in/nydcodes"
							target="_blank"
						>
							twitter
						</a>
						<a
							className="hover:text-secondary font-medium"
							href="https://www.linkedin.com/in/nicolydandara"
							target="_blank"
						>
							linkedin
						</a>
						<a
							className="hover:text-secondary font-medium"
							href="mailto:nicolydndr@gmail.com"
						>
							email
						</a>
					</div>
				</div>
			</section>

			<div>
				<div
					style={{
						backgroundColor: "#440047",
						top: "16%",
						left: "32%",
					}}
					class="w-24 h-3 absolute rounded bg-red-500 mt-2 mb-4"
				></div>
				<div
					style={{
						backgroundColor: "#fbecec",
						top: "24%",
						right: "16%",
					}}
					class="w-32 h-3 absolute top-24 bottom-16 bg-green-500 rounded mt-2 mb-4"
				></div>
				<div
					style={{
						backgroundColor: "#e11d74",
						top: "48%",
						left: "8%",
					}}
					class="w-24 h-3 absolute opacity-75 bg-green-500 rounded mt-2 mb-4"
				></div>
				<div
					style={{
						backgroundColor: "#91d18b",
						top: "64%",
						left: "64%",
					}}
					class="w-40 h-3 absolute opacity-75 bg-green-500 rounded mt-2 mb-4"
				></div>
			</div>

			<section className="">
				<Bio />
			</section>

			<section className="w-full h-40 opacity-50 my-20">
				<div>
					<div
						style={{
							backgroundColor: "#440047",
							top: "16%",
							left: "32%",
						}}
						class="w-24 h-3 relative rounded bg-red-500 mt-2 mb-4"
					></div>
					<div
						style={{
							backgroundColor: "#fbecec",
							top: "24%",
							left: "60%",
						}}
						class="w-32 h-3 relative bg-green-500 rounded mt-2 mb-4"
					></div>
					<div
						style={{
							backgroundColor: "#e11d74",
							top: "48%",
							left: "8%",
						}}
						class="w-24 h-3 relative opacity-75 bg-green-500 rounded mt-2 mb-4"
					></div>
					<div
						style={{
							backgroundColor: "#91d18b",
							top: "64%",
							left: "64%",
						}}
						class="w-40 h-3 relative opacity-75 bg-green-500 rounded mt-2 mb-4"
					></div>
				</div>
			</section>

			<section className="flex flex-row w-9/12 m-auto justify-between call">
				<div className=" w-2/5 space-y-4">
					<p className="text-center text-xl lowercase font-coda text-codegray font-semibold mb-1">
						Meus projetos
					</p>
					<div className="w-12 h-1 bg-secondary rounded m-auto mb-6"></div>
					<p className="text-lg leading-loose ">
						Uma aversão a tutoriais de aplicativos de tarefa me
						levou a criar projetos muito inusitados pra aprender
						novos conceitos e tecnologias.
					</p>
					<p className="text-lg leading-loose ">
						O resultado foi um jogo de matar erros? Um aplicativo
						financeiro? Um relógio de parede?
					</p>

					<p className="text-lg "></p>
					<Link href="/projects">
						<a className="font-coda text-primary text-lg block w-full text-right">
							Visite meu portfólio
						</a>
					</Link>
				</div>

				<div className="w-2/5 space-y-4">
					<p className="text-center text-xl lowercase font-coda text-codegray font-semibold mb-1">
						Me assista aprender
					</p>
					<div className="w-12 h-1 bg-secondary rounded m-auto mb-6"></div>
					<p className="text-lg leading-loose">
						Eu acredito que aprender em público é a maneira mais
						eficiente - e divertida - de aprender.
					</p>
					<p className="text-lg leading-loose">
						Por isso eu mantenho a minha jornada de desenvolvimento
						e design em um journal semanal pra todo mundo ver.
					</p>

					<Link href="/worjournal">
						<a className="font-coda text-primary text-lg block w-full text-right">
							Leia meus diários<br></br> de desenvolvimento
						</a>
					</Link>
				</div>
			</section>

			<section className="w-full h-40 opacity-50 my-20">
				<div>
					<div
						style={{
							backgroundColor: "#440047",
							top: "16%",
							left: "32%",
						}}
						class="w-24 h-3 relative rounded bg-red-500 mt-2 mb-4"
					></div>
					<div
						style={{
							backgroundColor: "#fbecec",
							top: "24%",
							left: "60%",
						}}
						class="w-32 h-3 relative bg-green-500 rounded mt-2 mb-4"
					></div>
					<div
						style={{
							backgroundColor: "#e11d74",
							top: "48%",
							left: "8%",
						}}
						class="w-24 h-3 relative opacity-75 bg-green-500 rounded mt-2 mb-4"
					></div>
					<div
						style={{
							backgroundColor: "#91d18b",
							top: "64%",
							left: "64%",
						}}
						class="w-40 h-3 relative opacity-75 bg-green-500 rounded mt-2 mb-4"
					></div>
				</div>
			</section>

			<Footer
				leadText={"Ei,"}
				callToAction={"vamos conversar!"}
				arrayLinks={[
					"github",
					"behance",
					"twitter",
					"linkedin",
					"email",
				]}
			></Footer>
		</>
	);
}

export default HomePage;
