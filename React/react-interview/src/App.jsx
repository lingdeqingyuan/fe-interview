import { useState } from 'react'
import './App.css'
import Heart from './Heart'

function App() {
  const [count, setCount] = useState('React Hooks')

  return (
    <>
      <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
      <Heart/>
    </>
  )
}

export default App
