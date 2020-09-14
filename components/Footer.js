import SocialLink from "./SocialLink";
import Link from "next/link";

export default function Footer({ leadText, callToAction, arrayLinks }) {
	return (
		<footer className="font-sans w-full px-12 lg:px-40 py-20 flex lg:flex-row flex-col items-center">
			<div className="w-full space-y-4 mb-12">
				<p className="text-xl">{leadText}</p>
				<p className="text-2xl lg:text-4xl lg:font-semibold">
					{callToAction}
				</p>
			</div>
			<div className="w-full flex flex-row justify-center lg:justify-end space-x-6">
				{arrayLinks.map((item) => (
					<SocialLink key={item} linkName={item} />
				))}
			</div>
		</footer>
	);
}
