import { useState } from "react"
import React, { createContext } from "react";

type TContext = {
    src: string;
    setSrc: React.Dispatch<React.SetStateAction<string>> | (() => null)
}

export const SrcContext = createContext<TContext>({
    src: "fight",
    setSrc: () => {
        //
    }
})


const SrcContextProvider = (props: { children: React.ReactNode }) => {
    const [src, setSrc] = useState<string>("fight")
    return (
        <SrcContext.Provider value={{ src, setSrc }}>
            {props.children}
        </SrcContext.Provider>
    )
}

export default SrcContextProvider