import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import Movies from './Movies'
import Series from './Series'
import { TStoreDispatch } from '../../../redux/store'
import { getMovies } from '../../../redux/slices/movie/movie.er'
import { getSeries } from '../../../redux/slices/series/series.er'

type Props = Record<string, never>

const Home = (props: Props) => {
    return (
        <div className='flex flex-col gap-5'>
            <Movies />
            <Series />
        </div>
    )
}

export default Home