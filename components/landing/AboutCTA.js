import Link from "next/link";

export default function Bio() {
	return (
		<section className="grid grid-cols-2 h-screen w-full">
			<div></div>
			<div className="flex flex-col self-center px-3 space-y-6">
				<h3 className="font-manrope text-4xl tracking-wide leading-snug">
					Sou estudante de Informática no nível técnico no CEFET-MG e
					divido meus aprendizados de programação entre o curso e
					metodologias autodidatas.
				</h3>
				<Link href="/work/about">
					<p className="font-manrope cursor-pointer call font-semibold text-xl">
						Mais sobre mim
					</p>
				</Link>
			</div>
		</section>
	);
}
