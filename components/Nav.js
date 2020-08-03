import Link from "next/link";

export default function Nav({ page }) {
	const existingPages = ["homepage", "projects", "workjournal"];

	const existingInactivePages = existingPages.filter((value, index, arr) => {
		return value != page;
	});

	return (
		<>
			<nav className="w-full py-12 px-8 pt-8 lg:px-12 lg:flex sm:text-right justify-between text-lg font-coda">
				<p className="font-semibold mb-2 text-primary text-xl">
					{page}
				</p>

				<div className="lg:flex space-y-4 lg:space-x-4 lg:space-y-0">
					{existingInactivePages.map((item) => (
						<Link
							className={"pointer-events-none block"}
							href={item == "homepage" ? "/" : "/" + item}
						>
							{"/" + item}
						</Link>
					))}
				</div>
			</nav>
		</>
	);
}
