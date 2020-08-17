import FooterLink from "./FooterLink";
import Link from "next/link";

export default function Footer({ leadText, callToAction, arrayLinks }) {
	return (
		<footer className="font-sans w-screen px-40 py-20 flex flex-row items-center ">
			<div className="w-full space-y-6">
				<p className="text-xl font-coda text-gray-800">{leadText}</p>
				<p className="text-3xl">{callToAction}</p>

				<div>
					<ul className="space-x-6 text-base">
						<li className="inline-block hover:text-primary">
							<Link href="/projects" passHref>
								<a className="">meus projetos</a>
							</Link>
						</li>
						<li className="inline-block hover:text-primary">
							<Link href="/projects" passHref>
								<a className="">meu journal</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="w-full flex flex-row justify-end space-x-6">
				{arrayLinks.map((item) => (
					<FooterLink key={item} linkName={item} />
				))}
			</div>
		</footer>

		/* <footer className="font-coda text-codegray text-center h-screen flex p-12 lg:p-0">
			<div className="w-screen self-center">
				<p className="text-xl lg:text-2xl">{leadText}</p>
				<p className="text-2xl lg:text-4xl font-bold mb-20">
					{callToAction}
				</p>

				
			</div>
		</footer> */
	);
}
