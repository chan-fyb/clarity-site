import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clarity from '@microsoft/clarity'

function App() {
  const [count, setCount] = useState(0)

    useEffect(() => {
      Clarity.consentv2({
        ad_storage: "granted",
        analytics_storage: "granted"
      })

      Clarity.identify("user-12345")
      Clarity.setTag("membership", "free")
      Clarity.setTag("page-type", "homepage")
    }, [])

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
        <button onClick={() => {
          setCount((count) => count + 1)
          Clarity.event("counter-clicked")
          Clarity.upgrade("important-action")
        }}>
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

export default App