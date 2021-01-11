import Link from "next/link";

export default function Custom404() {
	return (
		<section className="h-screen flex whitespace-nowrap overflow-hidden items-center space-x-12">
			<h1 className="text-gray-100 text-16xl font-fivo">404</h1>
			<div className="font-manrope w-full space-y-6 3">
				<h3 className="text-2xl">Eita, não tem nada aqui.</h3>
				<h2 className="text-4xl tracking-wide whitespace-pre-wrap">
					Volte para o conforto da{" "}
					<Link href="/">
						<p className="cursor-pointer text-yellow inline">
							Homepage
						</p>
					</Link>
					, lá tem muita coisa.
				</h2>
			</div>
			<h1 className="text-gray-100 text-16xl font-fivo">404</h1>
		</section>
	);
}
