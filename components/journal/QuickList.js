import { useState } from "react";
import List from "./List";

export default function QuickList(props) {
	const [toggleModal, setToggleModal] = useState(false);

	const buttonColor = toggleModal
		? "w-10 h-10 lg:w-16 lg:h-16 bg-black rounded-full"
		: "w-10 h-10 lg:w-16 lg:h-16 bg-yellowplus rounded-full";

	const sectionColor = toggleModal ? "py-6 bg-yellow mb-10" : "py-6 mb-10";

	return (
		<section className={sectionColor}>
			<div className="w-full flex justify-end px-12 items-center">
				<p className="font-manrope text-gray-600 px-6 text-xs lg:text-lg text-right">
					{props.text}
				</p>
				<button
					onClick={() => {
						setToggleModal(!toggleModal);
					}}
					className={buttonColor}
				></button>
			</div>
			{toggleModal ? <List /> : <></>}
		</section>
	);
}
