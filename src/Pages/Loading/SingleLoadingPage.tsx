

const SingleLoadingPage = () => {
    console.log("loading page ran");

    return (
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
    )
}

export default SingleLoadingPage