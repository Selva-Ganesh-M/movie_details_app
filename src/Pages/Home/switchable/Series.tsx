import React from 'react'
import "./series.css"
import MovieCard from '../../../components/cards/MovieCard'

type Props = Record<string, never>

const series = (props: Props) => {
    return (
        <div id='series'>

            {/* title */}
            <div className='text-2xl font-extrabold px-10 py-4 sticky top-[106px] md:top-[74px] bg-white opacity-95'>
                SERIES
            </div>

            {/* series-list */}
            <div id="series-list" className='w-[95%] m-auto'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    )
}

export default series