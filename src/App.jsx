/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */

import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 via-yellow-100 to-green-200 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        🇮🇳 India Culture Guide
      </h1>
      <p className="text-lg text-gray-700 max-w-xl text-center mb-10">
        Discover the rich heritage, festivals, cuisine, and traditions of India.
      </p>

      <button className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition">
        Explore States
      </button>
    </div>
  );
}

export default App;

