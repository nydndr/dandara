export default function Code({ postTitle, postLanguage }) {
	return (
		<div className="bg-codegray w-full lg:w-64 text-gray-200 font-coda rounded-lg mb-6 shadow-md">
			<div className=" flex pt-4 pl-4 space-x-3">
				<div className="w-3 h-3 bg-red-600 rounded-full"></div>
				<div className="w-3 h-3 bg-secondary rounded-full"></div>
				<div className="w-3 h-3 bg-tertiary rounded-full"></div>
			</div>
			<p className="pl-5 p-3 text-sm">
				title: {postTitle}
				<br></br>
				language: {postLanguage}
			</p>
		</div>
	);
}
