import Link from "next/link";

export default function CTA() {
	return (
		<div>
			<section className="h-screen grid grid-rows-3 p-6">
				<div>
					<Link href="/work">
						<h2 className="font-fivo text-9xl">projetos</h2>
					</Link>
				</div>
				<div>
					<Link href="/journal">
						<h2 className="font-fivo text-9xl text-center">
							journal
						</h2>
					</Link>
				</div>
				<div className="flex flex-row justify-end items-end text-center">
					<div>
						<Link href="/resume">
							<h2 className="font-fivo text-9xl yellow-stroke">
								currículo
							</h2>
						</Link>
						<p className="font-manrope">
							Estou procurando por um estágio em desenvolvimento.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
