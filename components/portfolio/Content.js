export default function Content({ content }) {
	return (
		<div className="flex flex-col w-full space-y-8">
			<div className="flex space-y-4 lg:space-y-0 flex-col lg:flex-row">
				<div className="w-full lg:w-1/4">
					<p className="font-coda text-gray-700 pb-4">
						{content.info1}
					</p>
					<p className="text-codegray text-xl">
						{content.info1value}
					</p>
				</div>
				<div className="w-full lg:w-2/4">
					<p className="font-coda text-gray-700 pb-4">
						{content.info2}
					</p>

					<div className="space-y-2">
						{content.info2value.map((item) => (
							<p className="text-codegray text-xl">{item}</p>
						))}
					</div>
				</div>
				<div className="w-full lg:w-1/4 flex flex-col space-y-8">
					<div>
						<p className="font-coda text-gray-700 pb-4">
							{content.info3}
						</p>
						<div className="space-y-6">
							{content.info3value.map((item) => (
								<p className="text-codegray text-xl">{item}</p>
							))}
						</div>
					</div>
					<div>
						<p className="font-coda text-gray-700 pb-4">
							{content.info4}
						</p>
						<div className="space-y-2">
							{content.info4value.map((item) => (
								<p className="text-codegray text-xl">{item}</p>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row justify-between">
				<div className="flex flex-col space-y-6 w-full lg:w-3/4">
					<div>
						<p className="font-coda text-gray-700 pb-4">
							{content.info5}
						</p>
						<div className="space-y-2">
							<p className="text-codegray text-xl leading-relaxed w-full lg:w-4/5">
								{content.info5value}
							</p>
						</div>
					</div>
					<div>
						<p className="font-coda text-gray-700 pb-4">
							{content.info6}
						</p>
						<ul className="font-sans text-codegray text-xl space-y-2">
							{content.info6value.map((item) => (
								<p className="text-codegray text-xl">{item}</p>
							))}
						</ul>
					</div>
				</div>
				<div className="w-full lg:w-1/4">
					<div>
						<p className="font-coda text-gray-700 pb-4">Acesse ⟶</p>
						<div className="space-y-2">
							{content.links.map((item) => (
								<a
									className="text-codegray text-xl block hover:text-primary"
									href={item.link}
								>
									{item.call}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
