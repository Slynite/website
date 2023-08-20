import { Interfaces } from "@/types/interfaces";
import Image from "next/image";

export default function Item(props: Interfaces.TimeLine) {
	return (
		<li className=" mb-6 sm:mb-0 md:w-52 lg:w-72">
			<div className="flex items-center pb-2">
				<Image src={"/icons/ellipse-gradiant.svg"} alt="Time Ellipse" width={15} height={15} />
				<div className="border-0 md:w-full md:border-[1px] md:mx-1 md:rounded-sm"></div>
			</div>
			<div className="pr-3">
				<h1 className="text-lg">{props.title}</h1>
				<p className="text-xs py-[1.5px]">{props.date}</p>
				<p className="text-sm">{props.description}</p>
			</div>
		</li>
	);
}
