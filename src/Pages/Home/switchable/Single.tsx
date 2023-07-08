import { useLocation } from "react-router-dom"

type Props = Record<string, never>

const Single = (props: Props) => {
    const location = useLocation()

    return (
        <div>Single - {location.pathname}</div>
    )
}

export default Single