import React, { createContext, useState } from 'react'

export const CardContext = createContext(null);
function CardProvider({children}) {
  const [items,setItems] = useState([]);
  return (
    
    <CardContext.Provider value={{items,setItems}}>
      {children}
    </CardContext.Provider>
  )
}

export default CardProvider
