import { useNavigate } from "react-router-dom"
import notFoundPage from "../../assets/images/pageNotFound.jpg"

type Props = Record<string, never>

const PageNotFound = (_props: Props) => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            <span className="font-bold text-xl text-gray-600">Page Not Found</span>
            <div className="w-[300px] h-[300px]">
                <img src={notFoundPage} alt="" />
            </div>
            <button className="border-2 py-2 px-4 bg-red-600 text-white rounded-md" onClick={() => navigate("/home/")}>Go Back to Home</button>
        </div>
    )
}

export default PageNotFound