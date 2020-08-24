export default function Header({ title, coverColor, imgPath }) {
	return (
		<>
			<h1 className="font-coda text-3xl font-semibold p-0">{title}</h1>

			<div
				style={{
					backgroundColor: coverColor,
				}}
				className="w-full h-auto my-8 pt-6 showcase flex justify-center items-center"
			>
				<img
					className="w-3/4 relative"
					src={"images/" + imgPath + "Showcase.png"}
				></img>
			</div>
		</>
	);
}
