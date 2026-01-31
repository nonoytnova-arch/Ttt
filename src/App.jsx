{/*import { useState } from 'react'
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

export default App*/}
import { useState, useEffect } from "react";

function ThemeSwitcher() {
  // theme state
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // apply theme when it changes
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* CSS VARIABLES + STYLES */}
      <style>
        {`
          :root {
            --bg-color: #ffffff;
            --text-color: #000000;
            --card-bg: #f4f4f4;
            --btn-bg: #000000;
            --btn-text: #ffffff;
          }

          body[data-theme="dark"] {
            --bg-color: #121212;
            --text-color: #ffffff;
            --card-bg: #1e1e1e;
            --btn-bg: #ffffff;
            --btn-text: #000000;
          }

          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: all 0.3s ease;
          }

          .container {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .card {
            background: var(--card-bg);
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            width: 300px;
          }

          button {
            margin-top: 20px;
            padding: 10px 20px;
            background: var(--btn-bg);
            color: var(--btn-text);
            border: none;
            cursor: pointer;
            border-radius: 6px;
            font-size: 16px;
          }
        `}
      </style>

      {/* UI */}
      <div className="container">
        <div className="card">
          <h2>Theme Switcher</h2>
          <p>Current Theme: {theme}</p>
          <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark 🌙" : "Light 🌞"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ThemeSwitcher;

