// Learning  React Hooks 

import { useState } from "react"
function App() {
  let [counter,setCounter] = useState(15)
  // const [counter,setCounter] = useState(15)
  // Is an array so doesn't make any difference 
  // let counter = 15

  let addVal =()=>{
    if(counter<20){
      setCounter(counter+1 )
<<<<<<< HEAD

      //Question
      // setCounter(counter+1 )
      // setCounter(counter+1 )
      // setCounter(counter+1 )
      // setCounter(counter+1 )
      // Will only update value once because of fibre concept which will bundle all thes calls.

      //Instead use approach
      //setCounter((prevCounter)=>PrevCounter+1)
      //setCounter((prevCounter)=>PrevCounter+1)
      //setCounter((prevCounter)=>PrevCounter+1)
      //setCounter((prevCounter)=>PrevCounter+1)
      //Now it is updating value previous state by 2 everytime  
=======
>>>>>>> e0c5fc8fb48cacb263069b817e499791c597f77a
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
