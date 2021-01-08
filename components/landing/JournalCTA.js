import React, { useRef, useEffect } from "react";
import Link from "next/link";
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
				<p className="font-manrope m-auto text-center w-3/4 text-2xl mb-12">
					Atualizações semanais sobre o meu aprendizado de novas
					tecnologias e fundamentos do Design e da Programação. Figma,
					React, C#... e contando.
				</p>
				<Link href="/journal">
					<p className="font-manrope text-center cursor-pointer call font-semibold text-xl">
						Mais sobre mim
					</p>
				</Link>
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
