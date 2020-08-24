import SocialLink from "./SocialLink";
import Link from "next/link";

export default function Footer({ leadText, callToAction, arrayLinks }) {
	return (
		<footer className="font-sans w-full px-40 py-20 flex flex-row items-center">
			<div className="w-full space-y-4">
				<p className="text-xl ">{leadText}</p>
				<p className="text-4xl font-semibold">{callToAction}</p>
			</div>
			<div className="w-full flex flex-row justify-end space-x-6">
				{arrayLinks.map((item) => (
					<SocialLink key={item} linkName={item} />
				))}
			</div>
		</footer>
	);
}
