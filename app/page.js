"use client";

// React Imports
import { useState, useRef } from "react";
import { ReactDOM } from "react";

// Next Imports
import Head from "next/head";
import Script from "next/script";

// React Component Imports
import Selection from "../public/components/selection";
import Chord from "../public/components/chord";

// Script

// Parent React Component
export default function ChordBeat() {
  // Selection Variables
  const [bpm, setBpm] = useState(100);
  const [key, setKey] = useState("C Major");
  const [beatspermeasure, setTimesignature] = useState(4);
  const [mute, setMute] = useState(0);
  const [start, setStart] = useState(0);
  const [chord, setChord] = useState("G Major");
  const chords = [];
  chords.push("G Major", "C Major", "F Major");
  const [is_running, setIsRunning] = useState(false);

  const softSound = new Audio("audio/soft.wav");
  const hardSound = new Audio("audio/hard.wav");

  const timer = useRef(new Timer(playClick, 60000 / bpm, { immediate: true }));
  let count = 0;

  function playClick() {

    if (count == beatspermeasure){
      count = 0;
    }
    if (count === 0){
      hardSound.play();
      hardSound.currentTime = 0;
      getChord(chords);
    }
    else {
      softSound.play();
      softSound.currentTime = 0;
    }
    console.log(count);
    count++;
  }

  function startStopChords() {
    if (!is_running) {
      setIsRunning(true);
      timer.current.start();
      document.querySelector('#start_stop_button').textContent = "Stop";
    }
    else {
      timer.current.stop();
      setIsRunning(false);
      document.querySelector('#start_stop_button').textContent = "Start";
    }
  }

  function getChord(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    setChord(array[randomIndex]);
  }

  // Stolen from: https://github.com/musicandcode/Metronome/blob/main/timer.js
  // An accurate timer constructor function
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
      console.log("timeout", this.timeout);
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
      console.log("Drift:", drift);
      console.log("Next round time interval:", this.timeInterval - drift);
      // Run timeout again and set the timeInterval of the next iteration to the original time interval minus the drift.
      this.timeout = setTimeout(this.round, this.timeInterval - drift);
    };
  }

  return (
    <div>
      <Head>
        <title>ChordBeat</title>
      </Head>

      <h1 className="w-screen text-center"> ChordBeat </h1>
      <Selection startStopChords={startStopChords} />
      <Chord chord={chord} />

    </div>
  );
}
