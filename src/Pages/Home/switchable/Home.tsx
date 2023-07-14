import Movies from './Movies'
import Series from './Series'

type Props = Record<string, never>

const Home = (_props: Props) => {
    return (
        <div className='flex flex-col gap-5'>
            <Movies type='home' />
            <Series />
        </div>
    )
}

export default Home