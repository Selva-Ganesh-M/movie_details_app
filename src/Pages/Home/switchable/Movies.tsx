import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MovieCard from '../../../components/cards/MovieCard'
import { IMovie, getMovies } from '../../../redux/slices/movie/movie.er'
import { selectAllMovies } from "../../../redux/slices/movie/movie.slice"
import { TRootState, TStoreDispatch } from "../../../redux/store"
import useSrcContext from "../../../customHooks/useSrcContext"
import LoadingCards from "../../../components/cards/LoadingCards"
import PageNotFoundImaage from "../../../assets/images/pageNotFound.jpg"
import "./movies.css"

export type srcOptions = {
    src: string,
    type: string,
    pageNo: number
}

type Props = {
    type: string
}

const Movies = ({ type }: Props) => {
    // #region : grabbing

    const { src, setSrc, page, setPage } = useSrcContext()
    const dispatch: TStoreDispatch = useDispatch()

    // #endregion : grabbing

    // #region : selectors
    const movies = useSelector(selectAllMovies)
    const moviesState = useSelector((state: TRootState) => state.movies)
    // #endregion : selectors

    // #region : side-effects

    useEffect(() => {
        const options = {
            src,
            type: "movie",
            pageNo: page.moviePageNo
        } as srcOptions;

        const fetchMovies = (options: srcOptions) => {
            dispatch(getMovies(options)).then((data) => {
                const tr = data.payload as {
                    data: IMovie[];
                    totalResults: number;
                }
                setPage(prev => {
                    return { ...prev, movieMaxPages: Math.ceil(tr.totalResults / 10) }
                })

            }).catch(() => {
                //
            })
        }
        void fetchMovies(options)
    }, [page.moviePageNo, dispatch])

    // #endregion : side-effects

    // #region : functions
    const handlePageChange = (action: string) => {
        switch (action) {
            case "+":
                if (page.moviePageNo < page.movieMaxPages) {
                    setPage(prev => {
                        return { ...prev, moviePageNo: prev.moviePageNo + 1 }
                    })
                }
                break;
            case "-":
                if (page.moviePageNo > 1) {
                    setPage(prev => {
                        return { ...prev, moviePageNo: prev.moviePageNo - 1 }
                    })
                }
                break;
        }

    }

    // #endregion : functions   
    return (
        <div id='movies'>

            {/* title */}
            <div className='px-10 py-4 sticky top-[106px] md:top-[74px] bg-white opacity-95 flex flex-col md:flex-row md:gap-2 mb-4 items-center gap-3 z-[1] justify-between'>
                <span className='text-2xl font-extrabold'>
                    MOVIES
                </span>
                <div className='flex items-center gap-2'>
                    <button
                        className="bg-red-600 text-white px-2 py-1 rounded-md cursor-pointer disabled:bg-gray-400" onClick={() => handlePageChange("-")}
                        disabled={(page.moviePageNo <= 1)}
                    >{`<<  Prev`}</button>
                    <div>Page: {moviesState.isError ? 0 : page.moviePageNo}</div>
                    <button
                        className="bg-red-600 text-white px-2 py-1 rounded-md cursor-pointer disabled:bg-gray-400"
                        onClick={() => handlePageChange("+")}
                        disabled={(page.moviePageNo >= page.movieMaxPages)}
                    >{`Next  >>`}</button>
                </div>
            </div>

            {/* movies-list */}
            <div className={`w-[95%] m-auto movies-list ${moviesState.isError && !moviesState.isFetching ? `has-error` : ``}`}>
                {
                    moviesState.isFetching ? <>{Array(14).fill(0).map((item, index) => <LoadingCards key={index} />)}</>
                        :
                        moviesState.isError ? (<>
                            <div className=" flex flex-col gap-3 justify-center items-center">
                                <div className="w-[200px] h-[200px]">
                                    <img src={PageNotFoundImaage} alt="" className="w-full h-full object-cover overflow-clip" />
                                </div>
                                <p className="px-4 py-2 bg-red-100 text-red-600 border-red-600 rounded-sm">{moviesState.error}</p>
                            </div>
                        </>)
                            :
                            (<>{
                                movies.map((movie: IMovie, index: number) => {
                                    return <MovieCard movie={movie} key={index} />
                                })
                            }</>)
                }
            </div>
        </div>
    )
}

export default Movies