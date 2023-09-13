export default function TimelineItem({title, time, description}: {title: string, time: string, description: string}) {
    return(
        <li className="mb-10 ml-4">
            <div className="absolute w-6 h-6 bg-gradient-to-tr from-primary-blue to-primary-green rounded-full mt-1.5 -left-3"></div>
            <div className="pt-0.5 pl-1.5">
                <h3 className="text-lg md:text-2xl font-semibold text-white">{title}</h3>
                <time className="text-md md:text-base text-gray-300">{time}</time>
                <p className="mt-3 mb-4 text-base md:text-lg text-gray-300">{description}</p>
            </div>
        </li>
    )
}