import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Movies from './Movies'
import Series from './Series'
import { TStoreDispatch } from '../../../redux/store'
import { getMovies } from '../../../redux/slices/movie/movie.er'
import { selectAllMovies } from '../../../redux/slices/movie/movie.slice'
import { selectAllSeries } from '../../../redux/slices/series/series.slice'
import { getSeries } from '../../../redux/slices/series/series.er'

type Props = Record<string, never>

const Home = (props: Props) => {
    const movies = useSelector(selectAllMovies)
    const series = useSelector(selectAllSeries)
    const dispatch: TStoreDispatch = useDispatch()
    useEffect(() => {
        void dispatch(getMovies({ src: "fight" }))
        void dispatch(getSeries({ src: "fight" }))
    }, [dispatch])
    return (
        <div className='flex flex-col gap-5'>
            <Movies />
            <Series />
        </div>
    )
}

export default Home