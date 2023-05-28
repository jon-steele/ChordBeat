'use client';

import { useState } from 'react';
import Selection from './Components/selection';

export default function Home() {

  const [bpm, setBpm] = useState(100);
  const [key, setKey] = useState('C Major');
  const [timesignature, setTimesignature] = useState('44');
  const [mute, setMute] = useState(0);
  const [start, setStart] = useState(0);

  return (
    <html>
      <head>
        <title>ChordBeat</title>
      </head>

      <body>
        <header class="w-screen text-center"> ChordBeat </header>
        
        <main class="h-screen">
          <Selection></Selection>
        </main>
      </body>
    </html>
  )
}
