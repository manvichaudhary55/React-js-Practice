import React from 'react'
import { CardContext } from '../../context/Card'
import { useContext } from 'react'

function Cart() {
  
    const cart = useContext(CardContext);
    const total = cart.items.reduce((a,b)=> a + b.price , 0);
  return (
    <div className='cart-items'>
      
      <h2>Cart</h2>
      
      {
        cart && cart.items.map((item) => 
          <li>{item.name} - {item.price} </li>
          )
      }

      <h2>Total : $ {total} </h2>
    </div>
  )
}

export default Cart
