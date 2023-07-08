import React from 'react'
import { Outlet } from "react-router-dom"

type Props = Record<string, never>

const BaseLayout = (props: Props) => {
    return (
        <div id='base-layout'>
            <Outlet />
        </div>
    )
}

export default BaseLayout