import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { apiKey } from "../../../config/envConfig";
import imdbIcon from "../../../assets/images/imdb.png"
import api, { TResponse } from "../../../config/api";
import TitleAndValue from "../../../components/TitleAndValue";

type Props = Record<string, never>

interface ISuccessSingleMovie {
    Response: "True",
    Title: string,
    Year: number,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Awards: string,
    Poster: string,
    Ratings: Array<{ Source: string, Value: string }>,
    imdbRating: string,
    imdbVotes: string,
    id: string,
}

interface IFailureSingleMovie {
    Response: "False",
    Error: string
}

const Single = (props: Props) => {
    const location = useLocation()
    const params = useParams()
    const navigate = useNavigate()
    const [movie, setMovie] = useState<ISuccessSingleMovie | undefined>()

    useEffect(() => {
        const getSingleMovie = (async () => {
            try {
                const res: TResponse<ISuccessSingleMovie | IFailureSingleMovie> = await api.get(`/?apikey=${apiKey}&i=${params.id!}&plot=full`);
                switch (res.data.Response) {
                    case "True":
                        setMovie(res.data);
                        break;
                    case "False":
                        navigate("/pageNotFound")
                        break;
                }

            } catch (error) {
                //
            }
        })

        void getSingleMovie()
    }, [params, navigate])

    return (
        <>{
            movie ?
                <div id="single-movie" className="p-8 flex gap-4 w-[95%] md:w-[75%] m-auto flex-col items-center lg:flex-row lg:mt-8 lg:items-start">
                    <div className="w-[250px] h-[380px] md:w-[300px] md:h-[450px]">
                        <img src={movie?.Poster} alt="" className={`w-full h-full object-cover`} />
                    </div>

                    <div className="flex-1">

                        {/* header section */}
                        <div className="flex gap-1 justify-between items-start md:items-center">
                            <div className="flex flex-col gap-2 m-auto md:m-0">
                                <div className="flex gap-1 flex-col">
                                    <div className="font-bold text-xl lg:text-3xl text-red-600 text-ellipsis whitespace-nowrap overflow-hidden">{movie?.Title}</div>
                                    <div className="flex items-center gap-2">
                                        <img src={imdbIcon} alt="" />
                                        <div className="text-[14px] font-semibold text-gray-500">{movie.imdbRating}</div>
                                        <div className="text-[14px] font-semibold text-gray-500">{`(${movie.imdbVotes})`}</div>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center text-xs font-semibold text-gray-400">
                                    <div>{movie?.Year}</div>
                                    ·
                                    <div>{movie?.Runtime}</div>
                                    ·
                                    <div>{movie?.Genre}</div>
                                </div>
                            </div>
                            <div className="text-xs font-semibold text-gray-400 hidden md:block">
                                <div>{movie?.Released}</div>
                            </div>
                        </div>

                        {/* cast and crew section */}
                        {/* <table className="mt-3 flex flex-col gap-2"> */}
                        <table className="mt-5">
                            <tbody>
                                <TitleAndValue title={"genre"} value={movie.Genre} />
                                <TitleAndValue title={"directors"} value={movie.Director} />
                                <TitleAndValue title={"Writer"} value={movie.Writer} />
                                <TitleAndValue title={"Actors"} value={movie.Actors} />
                                <TitleAndValue title={"Awards"} value={movie.Awards} />
                                <TitleAndValue title={"Plot"} value={movie.Plot} />
                            </tbody>
                        </table>
                    </div>

                </div>
                :
                <div id="single-movie" className="p-8 flex gap-4 w-[75%] m-auto animate-pulse">
                    <div className="w-[300px] h-[450px]">
                        <div className={`w-full h-full object-cover bg-gray-300 `}></div>
                    </div>

                    <div className="flex-1">

                        {/* header section */}
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2 flex-col">
                                    <div className="font-bold text-3xl text-red-600 text-ellipsis whitespace-nowrap overflow-hidden w-full h-8 bg-gray-300 rounded-md">{``}</div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-6 h-4 bg-gray-300 rounded-md"></div>
                                        <div className="w-6 h-4 bg-gray-300 rounded-md"></div>
                                        <div className="w-16 h-4 bg-gray-300 rounded-md"></div>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center text-xs font-semibold text-gray-400">
                                    <div className="w-6 h-4 bg-gray-300 rounded-md"></div>
                                    ·
                                    <div className="w-12 h-4 bg-gray-300 rounded-md">{``}</div>
                                    ·
                                    <div className="w-8 h-4 bg-gray-300 rounded-md">{``}</div>
                                </div>
                            </div>
                            <div className="text-xs font-semibold text-gray-400">
                                <div className="w-20 h-4 bg-gray-300 rounded-md">{``}</div>
                            </div>
                        </div>

                        {/* cast and crew section */}
                        {/* <table className="mt-3 flex flex-col gap-2"> */}
                        <div className="flex flex-col mt-8 gap-4">
                            <div className="flex gap-4">
                                <div className="w-24 bg-gray-300 h-8 rounded-md"></div>
                                <div className="w-[300px] bg-gray-300 h-8 rounded-md"></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-24 bg-gray-300 h-8 rounded-md"></div>
                                <div className="w-[300px] bg-gray-300 h-8 rounded-md"></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-24 bg-gray-300 h-8 rounded-md"></div>
                                <div className="w-[350px] bg-gray-300 h-8 rounded-md"></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-24 bg-gray-300 h-8 rounded-md"></div>
                                <div className="w-[390px] bg-gray-300 h-8 rounded-md"></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-24 bg-gray-300 h-8 rounded-md"></div>
                                <div className="w-[600px] bg-gray-300 h-[200px] rounded-md"></div>
                            </div>
                        </div>
                    </div>

                </div>
        }
        </>
    )
}

export default Single