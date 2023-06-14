export default function Chord(props) {
    return(
        <div>
            <h1 className={`bg-${props.colour}-500`}>{props.chordName}</h1>
        </div>
    )
}