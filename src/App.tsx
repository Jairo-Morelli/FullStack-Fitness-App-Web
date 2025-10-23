//import { useState } from 'react'
import Dashboard from "./Components/Dashboard"
import Mainui from "./Components/Mainui"
import Sideui from "./Components/Sideui"
import Title from "./Components/Title"
import './App.css'
import "./index.css"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Title/>
    {/* The reason I am using w-max m-auto is because 
      it is kind of bloated to just put it inside a flex box, 
      this should automatically grow and shrink with the webpage 
      
      I think it doesn't really matter how you have your responsiveness as long as it is 
      responsive.*/}
    <div className="grid grid-cols-5 gap-3 w-lvw h-[calc(80vh)] m-auto">
      <div className="col-span-1">
      <Sideui/>
      </div>
      <div className="col-span-2">
      <Mainui/>
      </div>
      <div className="col-span-2">
      <Dashboard/>
      </div>
    </div>
      <div className="flex justify-center border-white h-[100px] border-1">
      <footer> footer </footer>
      </div>
    </>
  )
}

export default App
 