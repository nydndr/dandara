import workquicklist from "../../content/work/workquicklist.json";
import ListItem from "./ListItem";

export default function List({ data }) {
	return (
		<div className="p-12 font-manrope my-4 flex flex-wrap lg:space-x-8 max-w-full">
			{workquicklist.map((item) => (
				<ListItem key={item.id} item={item} />
			))}
		</div>
	);
}
