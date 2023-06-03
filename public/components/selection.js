export default function Selection(props) {
    return(
        <div className="flex flex-col w-screen items-center">

            <select value={props.tonic} onChange={props.handleTonicChange}>
                <option>C</option>
                <option>C#</option>
                <option>D</option>
                <option>D#</option>
                <option>E</option>
                <option>F</option>
                <option>F#</option>
                <option>G</option>
                <option>G#</option>
                <option>A</option>
                <option>A#</option>
                <option>B</option>
            </select>

            <select value={props.key} onChange={props.handleKeyChange}>
                <option>Major</option>
                <option>Minor</option>
            </select>

            <label>Beats Per Minute: </label>
            <input type="range" min={40} max={200} id="bpm" value={parseInt(props.bpm)} onChange={(event) => props.setBpm(parseInt(event.target.value))}></input>
            <span>{props.bpm}</span>

            <label>Beats Per Measure: </label>
            <input type="range" min={1} max={12} id="beatspermeasure" value={parseInt(props.beatspermeasure)} onChange={(event) => props.setBeatsPerMeasure(parseInt(event.target.value))}></input>
            <span>{props.beatspermeasure}</span>

            <button id="start_stop_button" onClick={props.startStopChords}>Start</button>
        </div>
    )
}
