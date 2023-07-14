import { useState } from "react"
import React, { createContext } from "react";

type TPage = {
    moviePageNo: number,
    seriesPageNo: number,
    movieMaxPages: number
    seriesMaxPages: number
}

type TContext = {
    src: string;
    setSrc: React.Dispatch<React.SetStateAction<string>> | (() => null),
    page: TPage,
    setPage: React.Dispatch<React.SetStateAction<TPage>> | (() => null);
}

export const SrcContext = createContext<TContext>({
    src: "fight",
    setSrc: () => {
        //
    },
    page: {
        moviePageNo: 1,
        seriesPageNo: 1,
        movieMaxPages: 10,
        seriesMaxPages: 10
    },
    setPage: () => null
})


const SrcContextProvider = (props: { children: React.ReactNode }) => {
    const [src, setSrc] = useState<string>("fight");
    const [page, setPage] = useState<TPage>({
        moviePageNo: 1,
        seriesPageNo: 1,
        movieMaxPages: 10,
        seriesMaxPages: 10
    });
    return (
        <SrcContext.Provider value={{ src, setSrc, page, setPage }}>
            {props.children}
        </SrcContext.Provider>
    )
}

export default SrcContextProvider