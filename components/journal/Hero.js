export default function Hero({ postQuantity }) {
	return (
		<section className="h-screen flex flex-col lg:flex-row lg:justify-between justify-center w-10/12 m-auto items-center">
			<h1 className="font-fivo tracking-tighter text-6xl lg:text-16xl text-black yellow-stroke">
				journal
			</h1>
			<h1 className="font-manrope text-center lg:text-left text-2xl lg:text-4xl">
				<span className="">{postQuantity} semanas</span>
				<br></br>
				documentadas.
			</h1>
		</section>
	);
}
