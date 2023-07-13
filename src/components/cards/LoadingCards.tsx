import samplePoster from "../../assets/images/sample-poster.jpg"

type Props = Record<string, never>

const LoadingCards = (props: Props) => {
    return (
        <div
            className='h-[300px] border-2 rounded-md overflow-clip shadow-lg cursor-pointer transition-all duration-300 bg-gray-200 animate-pulse'
        >
            {/* poster */}
            <div id="movie-poster" className='w-full h-[80%] bg-gray-400'>
            </div>
            <div className='flex flex-col p-2 gap-2'>
                <div className="w-full h-4 bg-gray-400 rounded-md"></div>
                <div className="h-4 bg-gray-400 rounded-md w-[25%]"></div>
            </div>
        </div>
    )
}

export default LoadingCards