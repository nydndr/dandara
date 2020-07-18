import Head from "next/head";
import Link from "next/link";

function HomePage() {
	return (
		<>
			<Head>
				<title>My page title</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>
			<div className="text-center mt-24 lg:mt-0 space-y-12 lg:space-y-4">
				<h2 className="uppercase font-condensed font-bold text-5xl lg:text-8xl">
					EXTRA EXTRA: THIS PAGE HASN'T BEEN BUILD YET!
				</h2>
				<h3 className="font-sans text-xl">
					Go remind Nicoly that she has pages to build on
					{/* prettier-ignore */}
					<a href="https://twitter.com/nydcosa" className="text-secondary"> Twitter </a>
					and enjoy her{" "}
					<Link href="/workjournal"> Work Journal </Link>
					while you wait.
				</h3>
			</div>
			{/* <section>
				<div className="flex items-center">
					<div className="w-auto px-10 h-full flex flex-col font-condensed border-solid border border-tertiary text-tertiary">
						<button className="hover:text-primary text-3xl">
							PT
						</button>
						<button className="hover:text-primary text-3xl">
							EN
						</button>
					</div>
					<h1 className="w-full font-fatface text-7xl text-center text-primary">
						FRONT-END & UI-UX
					</h1>
					<div className="w-auto flex-row font-condensed text-primary uppercase text-right">
						<p className="text-4xl tracking-wider">2020</p>
						<p className="text-2xl">Edition</p>
					</div>
				</div>
				<div className="flex w-full justify-between border-black border-t border-b py-1 font-mono">
					<p>04112002</p>
					<p>PRICELESS</p>
				</div>
				<div className="text-center">
					<h2 className="uppercase font-condensed font-bold text-8xl">
						Nicoly Dandara
					</h2>
					<h3 className="font-fatface text-xl">
						I'm all about development and design, currently studying
						both and always refusing to do one without the other.
					</h3>
				</div>
			</section>
			<div className="flex mt-6 space-x-1">
				<nav className="flex flex-col w-3/4 text-secondary space-y-4 ">
					<div className="hover:text-primary">
						<h5 className="font-condensed uppercase text-4xl mb-4">
							Projects
						</h5>
						<Link href="/projects">
							<a className="font-fatface hand">See all</a>
						</Link>
					</div>
					<div className="hover:text-primary">
						<h5 className="font-condensed uppercase text-4xl mb-4">
							Work Journal
						</h5>
						<Link href="/workjournal">
							<a className="font-fatface hand">Read all</a>
						</Link>
					</div>
				</nav>
				<div className="text-primary">
					<h6 className="font-condensed uppercase text-3xl">
						About Me
					</h6>
					<p className="font-sans leading-loose text-justify text-base">
						Brasileira cursando o terceiro ano de Computação no
						CEFET-MG. Resultado de uma fusão entre o Design e
						Programação, constantemente tentando manter essas duas
						forças elementares em equilíbrio.
					</p>
					<p className="pt-2">
						Aberta a estágios na área do Desenvolvimento Front-End.
					</p>
					<p className="pt-2">
						Aberta a estágios na área do Desenvolvimento Front-End.
					</p>
				</div>
				<div className="flex flex-col flex-end w-auto space-y-2 text-center font-condensed text-tertiary uppercase transition">
					<a className=" hover:bg-primary py-2 px-16">Twitter</a>
					<a className=" hover:bg-primary py-2">Github</a>
					<a className=" hover:bg-primary py-2">Behance</a>
					<a className=" hover:bg-primary py-2">LinkedIn</a>
					<a className=" hover:bg-primary py-2">Email</a>
				</div>
			</div> */}
		</>
	);
}

export default HomePage;
