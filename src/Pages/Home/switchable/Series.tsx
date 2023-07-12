import "./series.css"

type Props = Record<string, never>

const Series = (props: Props) => {
    return (
        <div id='series'>

            {/* title */}
            <div className='px-10 py-4 sticky top-[106px] md:top-[74px] bg-white opacity-95 flex items-center gap-3'>
                <span className='text-2xl font-extrabold'>
                    SERIES
                </span>
                <div className='border-red-300 border-2 px-3 py-1 rounded-full flex items-center gap-2 cursor-pointer'>
                    <span>See More</span>
                    <span>
                        {`>`}
                    </span>
                </div>
            </div>

            {/* series-list */}
            <div id="series-list" className='w-[95%] m-auto'>
                {/* <MovieCard /> */}
            </div>
        </div>
    )
}

export default Series