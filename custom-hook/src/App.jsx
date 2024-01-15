import react, { createContext }  from 'react'
import Counter1 from './components/counter1'
import Counter2 from './components/counter2'

import './App.css'
import Child1 from './components/Child1'

function App() {
  const time = "6 pm "
  
  return (
    <>
    <Counter1 username="Naina"/>
    <Counter2 username ="Manvi"/>
    <Child1 time={time}/>

    </>
  )
}

export default App
