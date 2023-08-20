import { Interfaces } from "@/types/interfaces";
import Item from "./item";

export default function TimeLine({ timeLine }: { timeLine: Interfaces.TimeLine[] }) {
	return (
		<ol className="md:flex pt-5 md:float-right space-y-10 md:space-y-0">
			{timeLine
				.sort((item) => item.id)
				.map((item) => {
					return <Item key={item.id} title={item.title} date={item.date} description={item.description} id={item.id}></Item>;
				})}
		</ol>
	);
}
