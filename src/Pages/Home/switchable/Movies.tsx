import { useSelector } from "react-redux"
import "./movies.css"
import MovieCard from '../../../components/cards/MovieCard'
import "./movies.css"
import { IMovie } from '../../../redux/slices/movie/movie.er'
import { selectAllMovies } from "../../../redux/slices/movie/movie.slice"

type Props = Record<string, never>

const Movies = (props: Props) => {
    // #region : selectors
    const movies = useSelector(selectAllMovies)

    // #endregion : selectors
    return (
        <div id='movies'>

            {/* title */}
            <div className='px-10 py-4 sticky top-[106px] md:top-[74px] bg-white opacity-95 flex items-center gap-3 z-[1]'>
                <span className='text-2xl font-extrabold'>
                    MOVIES
                </span>
                <div className='border-red-300 border-2 px-3 py-1 rounded-full flex items-center gap-2 cursor-pointer'>
                    <span>See More</span>
                    <span>
                        {`>`}
                    </span>
                </div>
            </div>

            {/* movies-list */}
            <div id="movies-list" className='w-[95%] m-auto'>
                {
                    movies.map((movie: IMovie, index: number) => {
                        return <MovieCard movie={movie} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Movies