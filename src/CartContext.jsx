import { createContext,useState } from "react";

const CartContetxt = createContext();

export function CartProvider({children}) {

  const [items, setItems] = useState([])

  const addToCart = (product)=>{

    setItems([...items, product])
  }
  return (
    <CartContetxt.Provider value={{ items, addToCart }}>
      {children}
    </CartContetxt.Provider>
  );
}

export default CartContetxt;
