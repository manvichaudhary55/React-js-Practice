import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/Context'
function Counter() {
    const counterState = useContext(counterContext);
  return (
    <>
    <button onClick={()=>counterState.setCount(counterState.count+1)}>Increment </button>
    <button onClick={()=>counterState.setCount(counterState.count-1)}>Decrement</button>
    </>
  )
}

export default Counter
