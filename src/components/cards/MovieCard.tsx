import { IMovie } from '../../redux/slices/movie/movie.er'
import AlternatePoster from "../../assets/images/alternate-poster.jpg"
import { useNavigate } from 'react-router-dom'

// type Props = Record<string, never>
type Props = {
    movie: IMovie
}

const MovieCard = ({ movie }: Props) => {
    // #region : grabbing
    const navigate = useNavigate()

    // #endregion : grabbing
    return (
        <div
            className='h-[300px] border-2 rounded-md overflow-clip shadow-lg cursor-pointer hover:translate-y-[-2px] transition-all duration-300 bg-gray-100'
            onClick={() => navigate(`/home/movies/${movie.imdbID}`)}
        >
            {/* poster */}
            <div id="movie-poster" className='w-full h-[80%] '>
                <img src={movie.Poster} onError={(e) => {
                    e.currentTarget.src = AlternatePoster;
                }} alt={`${movie.Title} - poster`} className='h-full w-full object-center' />
            </div>
            <div className='flex flex-col p-2 gap-1'>
                <h1 className='font-extrabold text-gray-600 text-ellipsis text-sm whitespace-nowrap overflow-hidden'>{movie.Title}</h1>
                <p className='text-xs font-semibold text-gray-700'>{movie.Year}</p>
            </div>
        </div>
    )
}

export default MovieCard