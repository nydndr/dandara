import SocialCTA from "./SocialCTA";
import Link from "next/link";

export default function Footer() {
	return (
		<section className="flex flex-col md:flex-row md:justify-between px-6 py-12 items-start md:items-center space-y-6 md:space-y-0">
			<div>
				<p className="font-manrope font-lg">Manda um oi por aí!</p>
			</div>
			<SocialCTA />
		</section>
	);
}
