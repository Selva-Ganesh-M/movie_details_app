import React from 'react'
import "./movies.css"
import MovieCard from '../../../components/cards/MovieCard'
import "./movies.css"

type Props = Record<string, never>

const Movies = (props: Props) => {
    return (
        <div id='movies'>

            {/* title */}
            <div className='text-2xl font-extrabold px-10 py-4 sticky top-[106px] md:top-[74px] bg-white opacity-95'>
                MOVIES
            </div>

            {/* movies-list */}
            <div id="movies-list" className='w-[95%] m-auto'>
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

export default Movies