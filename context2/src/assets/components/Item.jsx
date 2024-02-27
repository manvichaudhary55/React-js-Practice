import React from 'react'
import { CardContext } from '../../context/Card'
import { useContext } from 'react'


function Item(props) {
    const card = useContext(CardContext);

    const removeItem = () =>{
      const updatedItem = card.items.filter((item)=> item.name !==props.name);
      card.setItems(updatedItem);
    }
    console.log(card);
  return (
    <div className='item-card'>
      <div >
        <h4>Item-name : {props.name}</h4>
        <h5>Price:${props.price}</h5>
        <button onClick={()=> card.setItems([...card.items,{name:props.name,price:props.price}])}>Add to cart</button>
        
        <button onClick={removeItem}>Remove</button>
    </div>
    </div>
    
    
  )
}

export default Item
