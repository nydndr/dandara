import Link from "next/link";

export default function Projects() {
	return (
		<div className="w-3/4 grid sm:grid-cols-1 lg:grid-cols-3 gap-6 min-h-screen min-w-full m-auto p-4">
			<div
				className="h-full bg-black bg-cover bg-center flex justify-end items-end"
				style={{ backgroundImage: 'url("static/images/Serase.png")' }}
			>
				<div className="p-6 text-yellowplus">
					<h3 className="font-fivo text-6xl">Serase</h3>
					<Link href="/work/serase">
						<p className="font-manrope cursor-pointer call text-right">
							Ver mais
						</p>
					</Link>
				</div>
			</div>

			<div
				className="h-full bg-black bg-cover bg-center flex justify-end items-end"
				style={{ backgroundImage: 'url("static/images/Dandara.png")' }}
			>
				<div className="p-6 text-yellowplus">
					<h3 className="font-fivo text-6xl">dandara</h3>
					<Link href="/work/dandara">
						<p className="font-manrope cursor-pointer call text-right">
							Ver mais
						</p>
					</Link>
				</div>
			</div>
			<div className="h-full grid grid-rows-2 gap-6">
				<div className="flex justify-end items-end p-6">
					<div>
						<h3 className="font-fivo text-xl">Mais Design</h3>
						<Link href="https://www.instagram.com/ddedandara/">
							<p className="font-manrope cursor-pointer call text-right">
								Meu Instagram
							</p>
						</Link>
					</div>
				</div>
				<div className="bg-yellow flex justify-end items-end p-6">
					<div>
						<h3 className="font-fivo text-xl">
							Mais Desenvolvimento
						</h3>
						<Link href="https://github.com/nydndr">
							<p className="font-manrope cursor-pointer call text-right">
								Meu Github
							</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
