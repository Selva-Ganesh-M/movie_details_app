import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Logo from "../../../assets/images/logo.png"
import { TStoreDispatch } from "../../../redux/store"
import { getMovies } from "../../../redux/slices/movie/movie.er"
import { getSeries } from "../../../redux/slices/series/series.er"
import { useLocation, useNavigate } from "react-router-dom"


type Props = Record<string, never>

const Navbar = (props: Props) => {
    // #region : grabbing

    const dispatch: TStoreDispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate()

    // #endregion : grabbing

    // #region : simple-states

    const [scrollLoc, setScrollLoc] = useState<number>(0)
    const [src, setSrc] = useState<string>("")

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

    // #region : search movies and series

    useEffect(() => {
        if (src === "" && ["/home", "/home/"].includes(location.pathname)) {
            void dispatch(getMovies({ src: "fight", type: "movie" }))
            void dispatch(getSeries({ src: "fight", type: "series" }))
        }
    }, [dispatch, src, location])

    // #endregion : search movies and series

    // #endregion : side-effects

    // #region : functions

    const handleSearch = () => {
        void dispatch(getMovies({ src, type: "movie" }))
        void dispatch(getSeries({ src, type: "series" }))
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
            <div id="logo" className="cursor-pointer w-fit h-[50px] flex gap-1 items-center font-extrabold font-serif text-lg" onClick={() => navigate("/home/")}>
                <img src={Logo} alt="logo" className="w-[50px]" />
                <div>&FLIX</div>
            </div>

            {/* search */}
            <div id="search" className="h-8 flex items-stretch justify-center str w-[300px]">
                <input
                    type="text"
                    id="input"
                    className="border-2 px-4 py-2 rounded-l-full outline-none"
                    placeholder="eg. Titanic"
                    value={src}
                    onChange={(e) => setSrc(e.target.value)}
                />
                <button id="search-button" className="text-white bg-red-600 rounded-r-full px-4" onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}

export default Navbar