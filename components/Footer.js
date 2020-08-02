import FooterLink from "./FooterLink";

export default function Footer({ leadText, callToAction, arrayLinks }) {
	console.log(leadText, callToAction);
	return (
		<footer className="font-coda text-codegray text-center h-screen flex p-12 lg:p-0">
			<div className="w-screen self-center">
				<p className="text-xl lg:text-2xl">{leadText}</p>
				<p className="text-2xl lg:text-4xl font-bold mb-20">
					{callToAction}
				</p>

				<div className="flex flex-col lg:flex-row justify-center lg:space-x-24 space-y-12 lg:space-y-0">
					{arrayLinks.map((item) => (
						<FooterLink key={item} linkName={item} />
					))}
				</div>
			</div>
		</footer>
	);
}
