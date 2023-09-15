export default function Legal({ params }: { params: { lang:string } }) {
    return (
        <div className='mt-6 md:mt-20 text-center'>
            <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10">
                Language {params.lang}
            </h1>
        </div>
    )
}