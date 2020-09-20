import SocialLink from "../components/SocialLink.js";

import Link from "next/link";
import Head from "next/head";

function HomePage() {
	return (
		<>
			<Head>
				<title>Nicoly Dandara</title>
			</Head>
			<section className="landing h-full w-full flex flex-col lg:flex-row p-8 lg:p-24 items-center">
				<div className="w-full lg:w-1/2 space-y-12 lg:space-y-8">
					<h1 className=" font-coda text-4xl text-black font-semibold">
						Olá, eu sou <br></br>
						<span className="text-primary">Nicoly Dandara</span>.
					</h1>

					<div className="text-lg leading-relaxed w-full lg:w-4/5">
						<h2>
							Eu gosto de{" "}
							<span className="text-primary text-base p-1 font-coda bg-gray-200">
								Front-End
							</span>{" "}
							, UI's, terminar projetos pessoais (é sério) e
							identificar fontes tipográficas em contextos que
							ninguém esperava.
						</h2>
					</div>

					<div className="flex space-x-3 opacity-75">
						<SocialLink linkName="github" />
						<SocialLink linkName="email" />
						<SocialLink linkName="linkedin" />
						<SocialLink linkName="behance" />
						<SocialLink linkName="twitter" />
					</div>
				</div>
				<div className="flex flex-col w-full lg:w-1/2 pt-24 lg:p-12 space-y-6">
					<article className="hover:bg-yellow-200 space-y-4 p-6">
						<Link href="/portfolio">
							<p className="call font-bold font-coda text-lg cursor-pointer">
								Conheça meus projetos
							</p>
						</Link>
						<p className="text-lg">
							Meus projetos mais legais{" "}
							<span className="italic">até agora</span>.
						</p>
					</article>

					<article className="hover:bg-gray-100 space-y-4 p-6">
						<Link href="/workjournal">
							<p className="call font-bold font-coda text-lg cursor-pointer">
								Leia meus projetos
							</p>
						</Link>
						<p className="text-lg">
							Meus testemunhos semanais de aprendizado.
						</p>
					</article>
				</div>
			</section>
		</>
	);
}

export default HomePage;
