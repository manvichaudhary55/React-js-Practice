import { useState } from 'react'
import Item from './assets/components/Item'
import './App.css'
import Cart from './assets/components/Cart'

function App() {
  

  return (
    <>
      <Item name = "phone" price = {1000}/>
      <Item name = "headphones" price = {500}/>
      <Item name = "laptop" price = {50000}/>

      <Cart/>
    </>
  )
}

export default App
