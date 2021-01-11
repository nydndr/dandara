import Link from "next/link";

export default function CTA() {
	return (
		<div>
			<section className="lg:h-screen grid grid-rows-3 p-6">
				<div>
					<Link href="/work">
						<h2 className="font-fivo text-4xl lg:text-9xl go cursor-pointer text-center md:text-left">
							projetos
						</h2>
					</Link>
				</div>
				<div>
					<Link href="/journal">
						<h2 className="font-fivo text-4xl lg:text-9xl text-center go cursor-pointer">
							journal
						</h2>
					</Link>
				</div>
				<div className="flex flex-row justify-end items-end text-center">
					<div>
						<Link href="/resume">
							<h2 className="font-fivo text-4xl lg:text-9xl yellow-stroke cursor-pointer">
								currículo
							</h2>
						</Link>
						<p className="font-manrope">
							Procuro por um estágio em desenvolvimento.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
