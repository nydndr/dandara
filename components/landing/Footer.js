import SocialCTA from "./SocialCTA";
import Link from "next/link";

export default function Footer() {
	return (
		<section className="flex justify-between px-6 py-12 items-center">
			<div>
				<p className="font-manrope font-lg">Manda um oi por aí!</p>
			</div>
			<SocialCTA />
		</section>
	);
}
