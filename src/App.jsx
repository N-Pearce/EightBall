import { useState } from 'react'
import './App.css'
import EightBall from './EightBall'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Magic Eight Ball</h1>
      <EightBall/>
    </>
  )
}

export default App
