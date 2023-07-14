import SeriesCard from "../../../components/cards/SeriesCard"
import { ISeries, selectAllSeries } from "../../../redux/slices/series/series.slice"
import { useDispatch, useSelector } from "react-redux"
import { TRootState, TStoreDispatch } from "../../../redux/store"
import useSrcContext from "../../../customHooks/useSrcContext"
import { useEffect } from "react"
import { srcOptions } from "./Movies"
import { getSeries } from "../../../redux/slices/series/series.er"
import PageNotFoundImaage from "../../../assets/images/pageNotFound.jpg"
import LoadingCards from "../../../components/cards/LoadingCards"
import "./series.css"

type Props = Record<string, never>

const Series = (props: Props) => {
    // #region : grabbing

    const { src, setSrc, page, setPage } = useSrcContext()
    const dispatch: TStoreDispatch = useDispatch()

    // #endregion : grabbing

    // #region : selectors
    const series = useSelector(selectAllSeries)
    const seriesState = useSelector((state: TRootState) => state.series)
    // #endregion : selectors

    // #region : side-effects

    useEffect(() => {
        const options = {
            src,
            type: "series",
            pageNo: page.seriesPageNo
        } as srcOptions;

        const fetchMovies = (options: srcOptions) => {
            dispatch(getSeries(options)).then((data) => {
                const tr = data.payload as {
                    data: ISeries[];
                    totalResults: number;
                }
                setPage(prev => {
                    return { ...prev, seriesMaxPages: Math.ceil(tr.totalResults / 10) }
                })

            }).catch(() => {
                //
            })
        }
        void fetchMovies(options)
    }, [page.seriesPageNo, dispatch])

    // #endregion : side-effects

    // #region : functions
    const handlePageChange = (action: string) => {
        switch (action) {
            case "+":
                if (page.seriesPageNo < page.seriesMaxPages) {
                    setPage(prev => {
                        return { ...prev, seriesPageNo: prev.seriesPageNo + 1 }
                    })
                }
                break;
            case "-":
                if (page.seriesPageNo > 1) {
                    setPage(prev => {
                        return { ...prev, seriesPageNo: prev.seriesPageNo - 1 }
                    })
                }
                break;
        }

    }

    // #endregion : functions   
    return (
        <div id='series' className="mb-4">

            {/* title */}
            <div className='px-10 py-4 sticky top-[106px] md:top-[74px] bg-white opacity-95 flex flex-col md:flex-row md:gap-2 mb-4 items-center gap-3 z-[1] justify-between'>
                <span className='text-2xl font-extrabold'>
                    SERIES
                </span>
                <div className="flex flex-col gap-1 items-center font-semibold text-gray-700">
                    <div className='flex items-center gap-2'>
                        <button
                            className="bg-red-600 text-white px-2 py-1 rounded-md cursor-pointer disabled:bg-gray-400"
                            onClick={() => handlePageChange("-")}
                            disabled={(page.seriesPageNo <= 1)}
                        >{`<<  Prev`}</button>
                        <div>Page: {seriesState.isError ? 0 : page.seriesPageNo}</div>
                        <button
                            className="bg-red-600 text-white px-2 py-1 rounded-md cursor-pointer disabled:bg-gray-400"
                            onClick={() => handlePageChange("+")}
                            disabled={(page.seriesPageNo >= page.seriesMaxPages)}
                        >{`Next  >>`}</button>
                    </div>
                    <div className="text-xs">{`(${seriesState.totalResults} Results)`}</div>
                </div>
            </div>

            {/* series-list */}
            <div className={`w-[95%] m-auto series-list ${seriesState.isError && !seriesState.isFetching ? `has-error` : ``}`}>
                {
                    seriesState.isFetching ? <>{Array(14).fill(0).map((item, index) => <LoadingCards key={index} />)}</>
                        :
                        seriesState.isError ? (<>
                            <div className=" flex flex-col gap-3 justify-center items-center">
                                <div className="w-[200px] h-[200px]">
                                    <img src={PageNotFoundImaage} alt="" className="w-full h-full object-cover overflow-clip" />
                                </div>
                                <p className="px-4 py-2 bg-red-100 text-red-600 border-red-600 rounded-sm">{seriesState.error}</p>
                            </div>
                        </>)
                            :
                            (<>{
                                series.map((item: ISeries, index: number) => {
                                    return <SeriesCard series={item} key={index} />
                                })
                            }</>)
                }
            </div>
        </div>
    )
}

export default Series