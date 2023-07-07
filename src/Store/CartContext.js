import { createContext, useState } from "react";


export const cartContext = createContext("")


export default function CartContextProvider(props){
const [cartData , setCartData] = useState([]);
const [cartCount, setCartCount] = useState(0)
  return <cartContext.Provider value={{cartData,setCartData,cartCount,setCartCount}}>
    {props.children}
  </cartContext.Provider>
}