import "../src/tailwind.css";
import { Link } from "../components/Link";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div
				style={{
					overflow: "scroll",
					overflowX: "hidden",
					height: "100vh",

					backgroundColor: "#FFFFFF",
				}}
			>
				<nav className="w-full px-8 pt-8 lg:px-12 lg:flex sm:text-right justify-end text-lg font-coda space-y-4 lg:space-x-6 lg:space-y-0">
					<Link href="/">
						{({ isActive }) =>
							isActive ? (
								<p className="text-primary font-semibold">
									homepage
								</p>
							) : (
								<p className="text-gray-900">homepage</p>
							)
						}
					</Link>
					<Link href="/projects">
						{({ isActive }) =>
							isActive ? (
								<p className="p-px text-primary font-semibold">
									my projects
								</p>
							) : (
								<p className="p-px text-gray-900">
									{" "}
									my projects
								</p>
							)
						}
					</Link>
					<Link href="/workjournal">
						{({ isActive }) =>
							isActive ? (
								<p className="p-px text-primary font-semibold">
									my journal
								</p>
							) : (
								<p className="p-px text-gray-900">my journal</p>
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
