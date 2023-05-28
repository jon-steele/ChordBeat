export default function Selection() {
    return(
        <div className="flex w-screen justify-center items-center">
            
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

        <input type="range" min={40} max={200} id="bpm"></input>

        <select id="time">
            <option value="44">4/4</option>
            <option value="34">3/4</option>
        </select>

        <button>Mute</button>
        <button>Start</button>
        </div>
    )
}
