import { createContext } from "react";
import { useState } from "react";

export const counterContext = createContext(null);

 function CounterProvider({children}) {
    const [count, setCount] = useState(0);
  return (
    <counterContext.Provider value={{count,setCount}}>
        {children}
    </counterContext.Provider>
  )
}

export default CounterProvider;
