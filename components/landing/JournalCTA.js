import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function JournalCTA() {
	gsap.registerPlugin(ScrollTrigger);

	const ref = useRef(null);

	useEffect(() => {
		const element = ref.current;
		gsap.fromTo(
			element.querySelector(".dev"),
			{
				x: -100,
			},
			{
				x: 0,
				scrollTrigger: {
					trigger: element,
					start: "top top",
					end: "bottom center",
					scrub: false,
				},
			}
		);
	}, []);

	useEffect(() => {
		const element = ref.current;
		gsap.fromTo(
			element.querySelector(".design"),
			{
				x: 100,
			},
			{
				x: 0,
				scrollTrigger: {
					trigger: element,
					start: "top top",
					end: "bottom center",
					scrub: false,
				},
			}
		);
	}, []);

	return (
		<div className="overflow-hidden">
			<section className="h-full w-full grid-rows-3 box-border" ref={ref}>
				<div>
					<h2 className="text-yellow opacity-25 text-16xl font-fivo dev text-center">
						dev
					</h2>
				</div>
				<p className="font-manrope text-center w-full text-2xl">
					React, React Native, Figma, TailwindCSS, Next.js e
					contando... Leia o meu progresso ->
				</p>
				<div>
					<h2 className="text-yellow opacity-25 text-16xl font-fivo w-full design text-center">
						design
					</h2>
				</div>
			</section>
		</div>
	);
}

export default JournalCTA;
