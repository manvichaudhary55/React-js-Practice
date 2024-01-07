// Learning  React Hooks 

import { useState } from "react"
function App() {
  let [counter,setCounter] = useState(15)
  // let counter = 15

  let addVal =()=>{
    if(counter<20){
      setCounter(counter+1 )
    }
    
  }
  let decVal =()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    
  }
  return (
    
    <>
     
    <h1>Counter Value :{counter}  </h1>
    <button onClick={addVal}>Increase {counter}</button>
    <button onClick={decVal}>Decrease{counter}</button>
    </>
    
  )
}

export default App
