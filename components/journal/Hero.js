export default function Hero({ postQuantity }) {
	return (
		<section className="h-screen flex flex-row justify-between w-10/12 m-auto items-center">
			<h1 className="font-fivo tracking-tighter text-16xl text-black yellow-stroke">
				journal
			</h1>
			<h1 className="font-manrope text-4xl">
				<span className="">{postQuantity} semanas</span>
				<br></br>
				documentadas.
			</h1>
		</section>
	);
}
