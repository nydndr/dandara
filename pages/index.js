import SocialLink from "../components/SocialLink.js";

import Link from "next/link";
import Head from "next/head";

function HomePage() {
	return (
		<>
			<section className="flex flex-row h-screen w-full items-center">
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
					<h3 className="font-manrope text-2xl">
						Apaixonada por tipografia, pela construção da web e{" "}
						<span className="rolling">role pra baixo</span> para saber o que mais.
					</h3>
				</div>
			</section>
		</>
	);
}

export default HomePage;
