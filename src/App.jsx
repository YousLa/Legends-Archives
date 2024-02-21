import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Legends Archives</h1>
      <Navbar />
    </>
  )
}

export default App
