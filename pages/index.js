import SocialLink from "../components/SocialLink.js";

import Link from "next/link";
import Head from "next/head";

import Hero from "../components/landing/Hero";
import Bio from "../components/landing/Bio";
import WorkCTA from "../components/landing/WorkCTA";
import JournalCTA from "../components/landing/JournalCTA";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

function HomePage() {
	return (
		<>
			<Hero />
			<Bio />
			<WorkCTA />
			<JournalCTA />
			<CTA />
			<Footer />
		</>
	);
}

export default HomePage;
