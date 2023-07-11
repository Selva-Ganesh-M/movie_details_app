import React from 'react'
import sample_poster from "../../assets/images/sample-poster.jpg"

type Props = Record<string, never>

const MovieCard = (props: Props) => {
    return (
        <div className='h-[300px] border-2 rounded-md overflow-clip shadow-lg cursor-pointer hover:translate-y-[-2px] transition-all duration-300 bg-slate-200'>
            {/* poster */}
            <div id="movie-poster" className='w-full h-[80%] '>
                <img src={sample_poster} alt="movie-poster" className='h-full w-full object-center' />
            </div>
        </div>
    )
}

export default MovieCard