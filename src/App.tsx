import { useState } from 'react'
import Dashboard from "./Components/Dashboard"
import Mainui from "./Components/Mainui"
import Sideui from "./Components/Sideui"
import Title from "./Components/Title"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Title/>
    <Mainui/>
    <Sideui/>
    <Dashboard/>
      <footer> footer </footer>
    </>
  )
}

export default App
 