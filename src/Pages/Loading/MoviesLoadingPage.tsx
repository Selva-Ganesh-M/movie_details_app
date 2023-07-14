import React from 'react'

type Props = Record<string, never>

const MoviesLoadingPage = (props: Props) => {
    return (
        <div id='movies'>

            {/* title */}
            <div className='px-10 py-4 sticky top-[106px] md:top-[74px] bg-white opacity-95 flex flex-col md:flex-row md:gap-2 mb-4 items-center gap-3 z-[1] justify-between'>
                <span className='text-2xl font-extrabold'>
                    MOVIES
                </span>
                <div className='flex items-center gap-2'>
                    <button className="bg-red-600 text-white px-2 py-1 rounded-md cursor-pointer" onClick={() => handlePageChange("-")}>{`<<  Prev`}</button>
                    <div>Page: {page.pageNo}</div>
                    <button className="bg-red-600 text-white px-2 py-1 rounded-md cursor-pointer" onClick={() => handlePageChange("+")}>{`Next  >>`}</button>
                </div>
            </div>

            {/* movies-list */}
            {moviesState.isFetching ?
                <div className="w-[95%] m-auto flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full border-dashed border-4 animate-spin duration-500 border-red-600"></div>
                </div> :
                <div id="movies-list" className='w-[95%] m-auto'>
                    {
                        movies.map((movie: IMovie, index: number) => {
                            return <MovieCard movie={movie} key={index} />
                        })
                    }
                    <LoadingCards />
                </div>
            }
        </div>
    )
}

export default MoviesLoadingPage