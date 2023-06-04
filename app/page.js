"use client";

// React Imports
import { useState, useRef, useEffect } from "react";
import { ReactDOM } from "react";

// Next Imports
import Head from "next/head";
import Script from "next/script";

// React Component Imports
import Selection from "../public/components/selection";
import Chord from "../public/components/chord";

import { nextChord } from "../public/scripts/functions";

// Parent React Component
export default function ChordBeat() {
  // Selection Variables
  const [bpm, setBpm] = useState(100);
  const [tonic, setTonic] = useState("C");
  const [key, setKey] = useState("Major");
  const [beatspermeasure, setBeatsPerMeasure] = useState(4);
  const [colour, setColour] = useState("red");
  const [start, setStart] = useState(0);
  const [chord, setChord] = useState(1);
  const [is_running, setIsRunning] = useState(false);

  const softSound = new Audio("audio/soft.wav");
  const hardSound = new Audio("audio/hard.wav");

  const timer = useRef(new Timer(playClick, 60000 / bpm, { immediate: true }));
  let count = 0;

  // Whenever BPM or beats per measure are updated, we can adjust our timer
  useEffect(() => {
    timer.current = new Timer(playClick, 60000 / bpm, { immediate: true });

    // Cleanup function
    return () => {
      // Clean up the timer when the component unmounts
      setIsRunning(false);
      document.querySelector("#start_stop_button").textContent = "Start";
      timer.current.stop();
    };
  }, [bpm, beatspermeasure, tonic, key]);

  function playClick() {
    if (count == beatspermeasure) {
      count = 0;
    }
    if (count === 0) {
      hardSound.play();
      hardSound.currentTime = 0;
      getChord(chord);
      setColour("blue");
    } else {
      softSound.play();
      softSound.currentTime = 0;
      setColour("slate");
    }
    count++;
  }

  function getChord(chord) {
    setChord(nextChord(chord));
  }

  function startStopChords() {
    if (!is_running) {
      setIsRunning(true);
      timer.current.start();
      document.querySelector("#start_stop_button").textContent = "Stop";
    } else {
      timer.current.stop();
      setIsRunning(false);
      document.querySelector("#start_stop_button").textContent = "Start";
    }
  }

  function Timer(callback, timeInterval, options) {
    this.timeInterval = timeInterval;

    // Add method to start timer
    this.start = () => {
      // Set the expected time. The moment in time we start the timer plus whatever the time interval is.
      this.expected = Date.now() + this.timeInterval;
      // Start the timeout and save the id in a property, so we can cancel it later
      this.theTimeout = null;

      if (options.immediate) {
        callback();
      }

      this.timeout = setTimeout(this.round, this.timeInterval);
      console.log("Timer Started");
    };
    // Add method to stop timer
    this.stop = () => {
      clearTimeout(this.timeout);
      console.log("Timer Stopped");
    };
    // Round method that takes care of running the callback and adjusting the time
    this.round = () => {
      // The drift will be the current moment in time for this round minus the expected time..
      let drift = Date.now() - this.expected;
      // Run error callback if drift is greater than time interval, and if the callback is provided
      if (drift > this.timeInterval) {
        // If error callback is provided
        if (options.errorCallback) {
          options.errorCallback();
        }
      }
      callback();
      // Increment expected time by time interval for every round after running the callback function.
      this.expected += this.timeInterval;
      // Run timeout again and set the timeInterval of the next iteration to the original time interval minus the drift.
      this.timeout = setTimeout(this.round, this.timeInterval - drift);
    };
  }

  return (
    <div className="h-screen flex flex-col text-center">
      <Head>
        <title>ChordBeat</title>
      </Head>

      <h1 className="w-screen text-center"> ChordBeat </h1>
      <Selection
        startStopChords={startStopChords}
        bpm={bpm}
        setBpm={setBpm}
        beatspermeasure={beatspermeasure}
        setBeatsPerMeasure={setBeatsPerMeasure}
        key={key}
        setKey={setKey}
        tonic={tonic}
        setTonic={setTonic}
      />
      <Chord id="chord" chord={chord} colour={colour} />
    </div>
  );
}
