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
					scrollSnapType: "y mandatory",
					backgroundColor: "#FFFFFF",
				}}
			>
				<nav
					style={{ scrollSnapAlign: "start" }}
					className="w-full py-6 px-8 pt-8 lg:px-12 lg:flex sm:text-right justify-end text-lg font-coda space-y-4 lg:space-x-6 lg:space-y-0"
				>
					<Link href="/">
						{({ isActive }) =>
							isActive ? (
								<p className="p-px text-primary">homepage</p>
							) : (
								<p className="p-px text-gray-900">homepage</p>
							)
						}
					</Link>
					<Link href="/projects">
						{({ isActive }) =>
							isActive ? (
								<p className="p-px text-primary">projects</p>
							) : (
								<p className="p-px text-gray-900">projects</p>
							)
						}
					</Link>
					<Link href="/workjournal">
						{({ isActive }) =>
							isActive ? (
								<p className="p-px text-primary">workjournal</p>
							) : (
								<p className="p-px text-gray-900">
									workjournal
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
