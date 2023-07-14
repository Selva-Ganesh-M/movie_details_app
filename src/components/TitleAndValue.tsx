
type Props = {
    title: string,
    value: string | number,
    className?: string
}

const TitleAndValue = (props: Props) => {
    return (
        // <tr className={`${props.className ? props.className : "flex gap-2 items-center"}`}>
        //     <td className="font-bold text-gray-800 capitalize">{props.title}:</td>
        //     <td className="font-normal text-gray-600">{props.value}</td>
        // </tr>
        <tr>
            <td className={`px-2 py-1 font-bold text-gray-800 capitalize align-top  ${props.className ? props.className : ""}`}>{props.title}:</td>
            <td className="px-2 py-1 font-normal text-gray-600">{props.value}</td>
        </tr>
    )
}

export default TitleAndValue