
import React from 'react'
import useHook from '../hooks/Hook'

function Counter1() {
    const [count,Increment,Decrement] = useHook(0);
  return (
    <>
    <h1>{count}</h1>

    <button onClick={Increment}>INCREMENT</button>
    <button onClick={Decrement}>DECREMENT</button>
    </>
  )
}

export default Counter1
