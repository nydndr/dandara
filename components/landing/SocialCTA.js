import Link from "next/link";
export default function SocialCTA() {
	return (
		<div className="flex space-x-3 text-gray-900">
			<Link href="https://www.instagram.com/ddedandara/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					className="fill-current cursor-pointer w-6 h-6"
					viewBox="0 0 256 256"
				>
					<rect width="256" height="256" fill="none"></rect>
					<circle
						cx="128"
						cy="128"
						r="40"
						fill="none"
						className="stroke-current"
						strokeMiterlimit="10"
						strokeWidth="12"
					></circle>
					<rect
						x="36"
						y="36"
						width="184"
						height="184"
						rx="48"
						strokeWidth="12"
						className="stroke-current"
						strokeLinecap="round"
						strokeLinejoin="round"
						fill="none"
					></rect>
					<circle cx="180" cy="75.99998" r="12"></circle>
				</svg>
			</Link>
			<Link href="https://www.linkedin.com/in/nicolydandara/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					className="fill-current cursor-pointer w-6 h-6"
					viewBox="0 0 256 256"
				>
					<rect width="256" height="256" fill="none"></rect>
					<rect
						x="40"
						y="40"
						width="176"
						height="176"
						rx="8"
						strokeWidth="12"
						className="stroke-current"
						strokeLinecap="round"
						strokeLinejoin="round"
						fill="none"
					></rect>
					<line
						x1="120"
						y1="112.00094"
						x2="120"
						y2="176.00094"
						fill="none"
						className="stroke-current"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="12"
					></line>
					<line
						x1="88"
						y1="112.00094"
						x2="88"
						y2="176.00094"
						fill="none"
						className="stroke-current"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="12"
					></line>
					<path
						d="M120,140.00094a28,28,0,1,1,56,0v36"
						fill="none"
						className="stroke-current"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="12"
					></path>
					<circle cx="88" cy="79.99998" r="12"></circle>
				</svg>
			</Link>
			<Link href="https://twitter.com/ddedandara">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					className="fill-current cursor-pointer w-6 h-6"
					viewBox="0 0 256 256"
				>
					<rect width="256" height="256" fill="none"></rect>
					<path
						d="M240.00526,60.66136A127.734,127.734,0,0,1,207.91934,92.591l-.0001-.00015A128.04082,128.04082,0,0,1,17.97784,199.99759l.0065-.01172a127.3714,127.3714,0,0,0,70.01685-22.14062l-.00076.00111A128.2051,128.2051,0,0,1,36.64049,37.72648l-.00039.00025A127.98517,127.98517,0,0,0,128.82832,95.1112l-.0028.00058a40.009,40.009,0,0,1,74.03809-27.81035l.00013.00442a128.63506,128.63506,0,0,0,37.14152-6.64449"
						fill="none"
						className="stroke-current"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="12"
					></path>
				</svg>
			</Link>
			<Link href="https://github.com/nydndr">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					className="fill-current cursor-pointer w-6 h-6"
					viewBox="0 0 256 256"
				>
					<rect width="256" height="256" fill="none"></rect>
					<path
						d="M84,232a24,24,0,0,0,24-24V160"
						fill="none"
						className="stroke-current"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="12"
					></path>
					<path
						d="M172,232a24,24,0,0,1-24-24V160"
						fill="none"
						className="stroke-current"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="12"
					></path>
					<path
						d="M152,160h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
						fill="none"
						className="stroke-current"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="12"
					></path>
					<path
						d="M104,160H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
						fill="none"
						className="stroke-current"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="12"
					></path>
					<path
						d="M64.51166,76.70377A51.90056,51.90056,0,0,1,68,32a51.9599,51.9599,0,0,1,43.82469,23.9988V56h32.35061V55.9988A51.9599,51.9599,0,0,1,188,32a51.90056,51.90056,0,0,1,3.48834,44.70377l0,0A47.77872,47.77872,0,0,1,200,104v8a48,48,0,0,1-48,48H104a48,48,0,0,1-48-48v-8a47.77872,47.77872,0,0,1,8.51163-27.29627Z"
						fill="none"
						className="stroke-current"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="12"
					></path>
				</svg>
			</Link>
		</div>
	);
}
