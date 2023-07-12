import { ISeries } from '../../redux/slices/series/series.slice'
import AlternatePoster from "../../assets/images/alternate-poster.jpg"

// type Props = Record<string, never>
type Props = {
    series: ISeries
}

const SeriesCard = ({ series }: Props) => {
    return (
        <div className='h-[300px] border-2 rounded-md overflow-clip shadow-lg cursor-pointer hover:translate-y-[-2px] transition-all duration-300 bg-gray-100'>
            {/* poster */}
            <div id="series-poster" className='w-full h-[80%] '>
                <img src={series.Poster} onError={(e) => {
                    e.currentTarget.src = AlternatePoster;
                }} alt={`${series.Title} - poster`} className='h-full w-full object-center' />
            </div>
            <div className='flex flex-col p-2'>
                <h1 className='font-extrabold text-ellipsis text-gray-600 text-sm whitespace-nowrap overflow-hidden'>{series.Title}</h1>
                <p className='text-xs font-semibold text-gray-700'>{series.Year}</p>
            </div>
        </div>
    )
}

export default SeriesCard