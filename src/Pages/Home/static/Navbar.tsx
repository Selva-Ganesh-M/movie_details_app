import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Logo from "../../../assets/images/logo.png"
import { TRootState, TStoreDispatch } from "../../../redux/store"
import { getMovies } from "../../../redux/slices/movie/movie.er"
import { getSeries } from "../../../redux/slices/series/series.er"
import { useLocation, useNavigate } from "react-router-dom"
import useSrcContext from "../../../customHooks/useSrcContext"


type Props = Record<string, never>

const Navbar = (_props: Props) => {
    // #region : grabbing

    const dispatch: TStoreDispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const { page: _page, setPage, setSrc, src } = useSrcContext()

    // #endregion : grabbing

    // #region : selectors
    const movieState = useSelector((state: TRootState) => state.movies)
    const seriesState = useSelector((state: TRootState) => state.series)

    // #endregion : selectors

    // #region : simple-states

    const [scrollLoc, setScrollLoc] = useState<number>(0)
    const [isHomePage, setIsHomePage] = useState<boolean>(true)

    // #endregion : simple-states

    // #region : side-effects

    // #region : top of the page checker

    useEffect(() => {
        const func = () => {
            setScrollLoc(window.pageYOffset)
        }
        window.addEventListener("scroll", func)

        return () => {
            window.removeEventListener('scroll', func)
        }
    }, [])

    // #endregion : top of the page checker

    // #region : isHomePage

    useEffect(() => {
        if (["/home", "/home/"].includes(location.pathname)) {
            setIsHomePage(true)
        } else {
            setIsHomePage(false)
        }
    }, [location])

    // #endregion : isHomePage

    // #endregion : side-effects

    // #region : functions

    const handleSearch = () => {
        setPage(() => {
            return {
                moviePageNo: 1,
                movieMaxPages: 1,
                seriesMaxPages: 1,
                seriesPageNo: 1
            }
        })
        dispatch(getMovies({ src, type: "movie", pageNo: 1 })).then(() => {
            setPage((prev) => {
                return { ...prev, movieMaxPages: movieState.totalResults / 10 }
            })
        }).catch(() => {
            //
        })
        void dispatch(getSeries({ src, type: "series", pageNo: 1 })).then(() => {
            setPage((prev) => {
                return { ...prev, seriesMaxPages: seriesState.totalResults / 10 }
            })
        }).catch(() => {
            //
        })
    }

    // #endregion : functions

    return (
        <div id="navbar"
            className={
                `w-full flex-col flex md:flex-row md:justify-between items-center px-5 py-3 sticky top-0 z-[2] 
            ${scrollLoc > 0 ? `opacity-95` : `opacity-100 shadow-md`}
             bg-white`
            }>
            {/* logo */}
            <div id="logo" className="cursor-pointer w-fit h-[50px] flex gap-1 items-center font-extrabold font-serif text-lg" onClick={() => { if (!["/home/", "/home"].includes(location.pathname)) { navigate("/home/") } }}>
                <img src={Logo} alt="logo" className="w-[50px]" />
                <div>&FLIX</div>
            </div>

            {/* search */}
            {
                isHomePage && (
                    <div id="search" className="h-8 flex items-stretch justify-center str w-[300px]">
                        <input
                            type="text"
                            id="input"
                            className="border-2 px-4 py-2 rounded-l-full outline-none"
                            placeholder="eg. Titanic"
                            value={src}
                            onChange={(e) => setSrc(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key == "Enter" && src) {
                                    handleSearch()
                                }
                            }}
                        />
                        <button id="search-button" className="text-white bg-red-600 rounded-r-full px-4 disabled:bg-gray-400" onClick={handleSearch} disabled={!src ? true : false}>Search</button>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar