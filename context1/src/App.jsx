import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './components/Counter'
import { useContext } from 'react'
import { counterContext } from './context/Context'
import './App.css'

function App() {
  const counterState = useContext(counterContext);
  console.log(counterState);
  return (
    <>
    <h1>Count is  {counterState.count}</h1>
      <Counter />
      <Counter/>
      <Counter/>
      <Counter/>
    </>
  )
}

export default App
