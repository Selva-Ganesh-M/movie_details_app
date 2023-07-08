import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from './static/Navbar'

type Props = Record<string, never>

const BaseLayout = (props: Props) => {
    return (
        <div id='base-layout' className='relative'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default BaseLayout