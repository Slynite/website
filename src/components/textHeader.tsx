export default function TextHeader({text, hightlightText, description}: {text: string, hightlightText?: string, description: string}) {
    return (
		<div className="text-center">
		        <h1 className="text-2xl lg:text-5xl font-bold">
					{text}{hightlightText ? <> <b className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green inline-block">{hightlightText}</b>.</> : <>.</>}
				</h1>
				<h2 className="text-base lg:text-2xl">{description}.</h2>
		</div>
    )
}