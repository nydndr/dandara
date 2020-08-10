import Footer from "../components/Footer";

import { Link } from "../components/Link";

function HomePage() {
	return (
		<>
			<section
				style={{ scrollSnapAlign: "start", backgroundColor: "#FFFFFF" }}
				className="h-screen font-coda rounded-lg flex flex-col space-y-12 justify-center items-center"
			>
				<div
					style={{ backgroundColor: "#fcfcfc" }}
					id="greeting"
					className="border-gray-700 border w-2/3 rounded-lg h-auto shadow-md"
				>
					<div className="flex p-4 space-x-3">
						<div className="w-4 h-4 bg-red-600 rounded-full"></div>
						<div className="w-4 h-4 bg-secondary rounded-full"></div>
						<div className="w-4 h-4 bg-tertiary rounded-full"></div>
					</div>

					<div className="text-lg p-4 pt-0">
						<p>
							<span className="text-gray-700 inline-block w-6 text-right">
								1
							</span>{" "}
							Hi, I'm Nicoly.
						</p>
						<p>
							<span className="text-gray-700 inline-block w-6 text-right">
								2
							</span>{" "}
							I study development, therefore{" "}
							<a className="text-primary" href="">
								I develop
							</a>
							.
						</p>
						<p>
							<span className="text-gray-700 inline-block w-6 text-right">
								2
							</span>{" "}
							I like design, therefore{" "}
							<a className="text-secondary">I design</a>.
						</p>
						<p>
							<span className="text-gray-700 inline-block w-6 text-right">
								3
							</span>{" "}
							I like good music, therefore I stan Beyoncé.
						</p>
						<p>
							<span className="text-gray-700 inline-block w-6 text-right">
								4
							</span>{" "}
							And oh, yeah,{" "}
							<a className="text-tertiary">I tweet.</a>
						</p>
					</div>
				</div>
			</section>

			<div style={{ scrollSnapAlign: "center" }}>
				<Footer
					leadText="Oi"
					callToAction="Vamos conversar!"
					arrayLinks={["github", "linkedin"]}
				></Footer>
			</div>
			{/* </div> */}
		</>
	);
}

HomePage.headerTitle = "This is home";

export default HomePage;
