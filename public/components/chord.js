export default function Chord(props) {
    return(
        <div>
            <h1 className={`bg-${props.colour}-500`}>{props.chord}</h1>
        </div>
    )
}