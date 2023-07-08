import { useEffect, useState } from "react"
import Logo from "../../../assets/images/logo.png"


type Props = Record<string, never>

const Navbar = (props: Props) => {

    // #region : simple-states

    const [scrollLoc, setScrollLoc] = useState<number>(0)

    // #endregion : simple-states

    // #region : side-effects

    // #refirst: top of the page checker

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

    // #endregion : side-effects

    return (
        <div id="navbar"
            className={
                `w-full flex-col flex md:flex-row md:justify-between items-center px-5 py-3 sticky top-0 z-[1] 
            ${scrollLoc > 0 ? `opacity-95` : `opacity-100 shadow-md`}
             bg-white`
            }>
            {/* logo */}
            <div id="logo" className="cursor-pointer w-fit h-[50px] flex gap-1 items-center font-extrabold font-serif text-lg">
                <img src={Logo} alt="logo" className="w-[50px]" />
                <div>&FLIX</div>
            </div>

            {/* search */}
            <div id="search" className="h-8 flex items-stretch justify-center str w-[300px]">
                <input type="text" id="input" className="border-2 px-4 py-2 rounded-l-full outline-none" placeholder="eg. Titanic" />
                <button id="search-button" className="text-white bg-red-600 rounded-r-full px-4">Search</button>
            </div>
        </div>
    )
}

export default Navbar