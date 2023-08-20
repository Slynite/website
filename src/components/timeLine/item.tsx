import { Interfaces } from "@/types/interfaces";
import Image from "next/image";

export default function Item(props: Interfaces.TimeLine) {
	return (
		<li className="flex md:flex-col md:w-52 lg:w-72">
			<div className="flex flex-col mr-4 md:flex-row items-center md:pb-2">
				<Image src={"/icons/ellipse-gradiant.svg"} alt="Time Ellipse" width={15} height={15} />
				<div className="h-full w-0 md:w-full md:h-0 border-[1px] mx-1 rounded-sm"></div>
			</div>
			<div className="pb-5 md:pr-3">
				<h1 className="text-lg">{props.title}</h1>
				<p className="text-xs py-[1.5px]">{props.date}</p>
				<p className="text-sm">{props.description}</p>
			</div>
		</li>
	);
}
