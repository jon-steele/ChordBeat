'use client';
import { useState } from 'react';
import Selection from '../public/components/selection';
import Chord from '../public/components/chord';
import Timer from '@/scripts/timer.js';

export default function ChordBeat() {

  const [bpm, setBpm] = useState(100);
  const [key, setKey] = useState('C Major');
  const [timesignature, setTimesignature] = useState('44');
  const [mute, setMute] = useState(0);
  const [start, setStart] = useState(0);
  const [chord, setChord] = useState('G Major');

  const chords = [];
  chords.push("G Major", "C Major", "F Major");

  const softSound = new Audio('audio/soft.wav');
  const hardSound = new Audio('audio/hard.wav');

  const timer = new Timer(playClick, 60000 / bpm, { immediate: true });

  function playClick() {
    softSound.play();
    getChord(chords);
  }

  function startChords() {
    timer.start();
  }

  function getChord(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    setChord(array[randomIndex]);
  }

  return (
    <html>
      <head>
        <title>ChordBeat</title>
      </head>

      <body>
        <header className="w-screen text-center"> ChordBeat </header>
        
        <main className="h-screen">
          <Selection startChords={startChords}/>
          <Chord chord={chord} />
          <button onClick={playClick}>Click</button>
        </main>
      </body>
    </html>
  )
}
