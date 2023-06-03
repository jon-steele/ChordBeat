export default function Selection(props) {
    return(
        <div className="flex flex-col w-screen items-center">

            <select id="key">
                <option value="cmajor">C Major</option>
                <option value="cminor">C Minor</option>
                <option value="csharpmajor">C# Major / Db Major</option>
                <option value="csharpminor">C# Minor / Db Minor</option>
                <option value="dmajor">D Major</option>
                <option value="dminor">D Minor</option>
                <option value="dsharpmajor">D# Major / Eb Major</option>
                <option value="dsharpminor">D# Minor / Eb Minor</option>
                <option value="emajor">E Major</option>
                <option value="eminor">E Minor</option>
                <option value="fmajor">F Major</option>
                <option value="fminor">F Minor</option>
                <option value="fsharpmajor">F# Major / Gb Major</option>
                <option value="fsharpminor">F# Minor / Gb Minor</option>
                <option value="gmajor">G Major</option>
                <option value="gminor">G Minor</option>
                <option value="gsharpmajor">G# Major / Ab Major</option>
                <option value="gsharpminor">G# Minor / Ab Minor</option>
                <option value="amajor">A Major</option>
                <option value="aminor">A Minor</option>
                <option value="asharpmajor">A# Major / Bb Major</option>
                <option value="asharpminor">A# Minor / Bb Minor</option>
                <option value="bmajor">B Major</option>
                <option value="bminor">B Minor</option>
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
