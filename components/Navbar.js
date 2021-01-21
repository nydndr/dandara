/*  ./components/Navbar.jsx     */
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<>
			<nav className="flex items-center flex-wrap bg-white pt-3 px-3">
				<Link href="/">
					<a className="inline-flex items-center p-2 mr-4 ">
						<span className="text-2xl text-black font-fivo tracking-wide">
							d
						</span>
					</a>
				</Link>
				<button
					className=" inline-flex p-3 hover:bg-yellowplus rounded-full lg:hidden text-black ml-auto hover:text-white outline-none"
					onClick={handleClick}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>

				<div
					className={`${
						active ? "" : "hidden"
					}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
				>
					<div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
						<Link href="/">
							<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-black items-center justify-center font-manrope font-semibold hover:text-yellowplus">
								início
							</a>
						</Link>
						<Link href="/sobre">
							<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-black items-center justify-center font-manrope font-semibold hover:text-yellowplus">
								sobre mim
							</a>
						</Link>
						<Link href="/journal">
							<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-black items-center justify-center font-manrope font-semibold hover:text-yellowplus">
								journal
							</a>
						</Link>
						<Link href="/curriculo">
							<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-orange items-center justify-center font-manrope font-semibold hover:text-yellowplus">
								me contrate
							</a>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}
