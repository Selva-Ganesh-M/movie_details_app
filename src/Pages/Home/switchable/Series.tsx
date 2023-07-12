import SeriesCard from "../../../components/cards/SeriesCard"
import { ISeries, selectAllSeries } from "../../../redux/slices/series/series.slice"
import { useSelector } from "react-redux"
import "./series.css"
import { TRootState } from "../../../redux/store"

type Props = Record<string, never>

const Series = (props: Props) => {
    // #region : selectors

    const series = useSelector(selectAllSeries)
    const seriesState = useSelector((state: TRootState) => state.series)

    // #endregion : selectors
    return (
        <div id='series' className="mb-8">

            {/* title */}
            <div className='px-10 py-4 sticky top-[106px] md:top-[74px] bg-white opacity-95 flex items-center gap-3 z-[1]' >
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
            {
                seriesState.isFetching ? <div className="w-[95%] m-auto flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full border-dashed border-4 animate-spin border-red-600"></div>
                </div> :
                    <div id="series-list" className='w-[95%] m-auto'>
                        {
                            series.map((item: ISeries) => {
                                return <SeriesCard series={item} key={item.imdbID} />
                            })
                        }
                    </div>
            }
        </div>
    )
}

export default Series