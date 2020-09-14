import "../styles/main.css";

import { Link } from "../components/Link";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div>
				<nav className="w-full px-8 pt-8 py-4 text-right lg:px-12 lg:flex justify-end text-base font-coda space-y-4 lg:space-x-6 lg:space-y-0 bg-transparent">
					<Link href="/">
						{({ isActive }) =>
							isActive ? (
								<p className="p-px text-primary">homepage</p>
							) : (
								<p className="p-px text-codegray">homepage</p>
							)
						}
					</Link>
					<Link href="/portfolio">
						{({ isActive }) =>
							isActive ? (
								<p className="p-px text-primary font-semibold">
									meus projetos
								</p>
							) : (
								<p className="p-px text-codegray">
									{" "}
									meus projetos
								</p>
							)
						}
					</Link>
					<Link href="/workjournal">
						{({ isActive }) =>
							isActive ? (
								<p className="p-px text-primary font-semibold">
									meu journal
								</p>
							) : (
								<p className="p-px text-codegray">
									meu journal
								</p>
							)
						}
					</Link>
				</nav>
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
