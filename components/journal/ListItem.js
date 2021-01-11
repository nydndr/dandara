import Link from "next/link";
import { useState } from "react";

export default function ListItem({ item }) {
	const [toggleDescription, setToggleDescription] = useState(false);

	const itemButtonColor = toggleDescription
		? "font-manrope font-bold text-xl lg:text-6xl inline text-black"
		: "font-manrope font-semibold text-xl lg:text-6xl inline text-black";

	return (
		<div className="flex max-w-full w-auto items-center p-2 lg:p-8">
			{item.link ? (
				<button
					className={itemButtonColor}
					onClick={() => setToggleDescription(!toggleDescription)}
				>
					{item.nome}
				</button>
			) : (
				<p className="font-manrope font-semibold text-xl lg:text-6xl inline text-gray-400">
					{item.nome}
				</p>
			)}

			{toggleDescription ? (
				<Link href={item.link}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="fill-current stroke-current text-black w-6 h-6 lg:w-20 lg:h-20 cursor-pointer"
						viewBox="0 0 256 256"
					>
						<rect
							width="256"
							height="256"
							fill="none"
							stroke="none"
						></rect>
						<line
							x1="64"
							y1="192"
							x2="192"
							y2="64"
							className="fill-current stroke-current"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="16"
						></line>
						<polyline
							points="88 64 192 64 192 168"
							fill="none"
							className="stroke-current"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="16"
						></polyline>
					</svg>
				</Link>
			) : (
				<></>
			)}
		</div>
	);
}
