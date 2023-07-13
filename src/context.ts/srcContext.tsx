import { useState } from "react"
import React, { createContext } from "react";

type TContext = {
    src: string;
    setSrc: React.Dispatch<React.SetStateAction<string>> | (() => null),
    page: {
        pageNo: number,
        maxPages: number
    },
    setPage: React.Dispatch<React.SetStateAction<{ pageNo: number, maxPages: number }>> | (() => null);
}

export const SrcContext = createContext<TContext>({
    src: "fight",
    setSrc: () => {
        //
    },
    page: {
        pageNo: 1,
        maxPages: 10
    },
    setPage: () => null
})


const SrcContextProvider = (props: { children: React.ReactNode }) => {
    const [src, setSrc] = useState<string>("fight");
    const [page, setPage] = useState<{ pageNo: number, maxPages: number }>({ pageNo: 1, maxPages: 10 });
    return (
        <SrcContext.Provider value={{ src, setSrc, page, setPage }}>
            {props.children}
        </SrcContext.Provider>
    )
}

export default SrcContextProvider