import { useState } from 'react'
import Dashboard from './Components/dashboard'
import Mainui from './Components/mainui'
import Sideui from './Components/sideui'
import Title from './Components/title'
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
 