import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./movies.css"
import MovieCard from '../../../components/cards/MovieCard'
import "./movies.css"
import { IMovie, getMovies } from '../../../redux/slices/movie/movie.er'
import { selectAllMovies } from "../../../redux/slices/movie/movie.slice"
import { TRootState, TStoreDispatch } from "../../../redux/store"
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"
import useSrcContext from "../../../customHooks/useSrcContext"

type srcOptions = {
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
            pageNo: page.pageNo
        } as srcOptions;

        const fetchMovies = async (options: srcOptions) => {
            const res = await dispatch(getMovies(options))
        }

        fetchMovies(options).then(() => {
            //
        }).catch(() => {
            //
        })
    }, [page, dispatch])

    // #endregion : side-effects

    // #region : functions
    const handlePageChange = (action: string) => {
        switch (action) {
            case "+":
                if (page.pageNo < page.maxPages) {
                    setPage(prev => {
                        return { ...prev, pageNo: prev.pageNo + 1 }
                    })
                }
                break;
            case "-":
                if (page.pageNo > 1) {
                    setPage(prev => {
                        return { ...prev, pageNo: prev.pageNo - 1 }
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
                    <button className="bg-red-600 text-white px-2 py-1 rounded-md cursor-pointer" onClick={() => handlePageChange("-")}>{`<<  Prev`}</button>
                    <div>Page: {page.pageNo}</div>
                    <button className="bg-red-600 text-white px-2 py-1 rounded-md cursor-pointer" onClick={() => handlePageChange("+")}>{`Next  >>`}</button>
                </div>
            </div>

            {/* movies-list */}
            {moviesState.isFetching ?
                <div className="w-[95%] m-auto flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full border-dashed border-4 animate-spin duration-500 border-red-600"></div>
                </div> :
                <div id="movies-list" className='w-[95%] m-auto'>
                    {
                        movies.map((movie: IMovie, index: number) => {
                            return <MovieCard movie={movie} key={index} />
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Movies