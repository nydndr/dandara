import Link from "next/link";

function HomePage() {
	return (
		<>
			<section className="text-gray-500 font-coda h-full flex-row origin-center w-full p-12 lg:p-64">
				<h1 className="text-3xl">
					Error 405: Lazy Developer<br></br>Nicoly haven't developed
					this page yet :/
				</h1>
				<h2 className="text-3xl text-primary">
					Go to{" "}
					<Link href="/workjournal">
						<a>Work Journal -></a>
					</Link>
				</h2>
			</section>
		</>
	);
}

export default HomePage;
