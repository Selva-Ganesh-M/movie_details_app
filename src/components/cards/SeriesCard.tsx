import { IMovie } from '../../redux/slices/movie/movie.er'
import { ISeries } from '../../redux/slices/series/series.slice'

// type Props = Record<string, never>
type Props = {
    series: ISeries
}

const SeriesCard = ({ series }: Props) => {
    return (
        <div className='h-[300px] border-2 rounded-md overflow-clip shadow-lg cursor-pointer hover:translate-y-[-2px] transition-all duration-300 bg-slate-100'>
            {/* poster */}
            <div id="series-poster" className='w-full h-[80%] '>
                <img src={series.Poster} alt="series-poster" className='h-full w-full object-center' />
            </div>
            <div className='flex flex-col p-2'>
                <h1 className='font-extrabold text-ellipsis text-sm whitespace-nowrap overflow-hidden'>{series.Title}</h1>
                <p className='text-xs font-semibold text-gray-700'>{series.Year}</p>
            </div>
        </div>
    )
}

export default SeriesCard