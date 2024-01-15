import React from 'react'
import useHook from '../hooks/Hook'


function Counter2({username}) {

    const [count,Increment,Decrement] = useHook(10);

  return (
    <>
    <h1>{username}</h1>
    <h1>{count}</h1>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}> Decrement</button>
    </>
  )
}

export default Counter2
