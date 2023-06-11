import { createContext,useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {

  const [items, setItems] = useState([])

  const addToCart = (product)=>{
    const foundItem = items.find((item)=> item.id=== product.id)
    if (foundItem) {
      foundItem.amount++
    } else {
      setItems([...items, {...product, amount:1}])
    }
  }
  const increaseAmount = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }
        return item;
      })
    );
  };


  const decreaseAmount = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId && item.amount > 1) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }
        return item;
      })
    );
  };




  return (
    <CartContext.Provider value={{ items, addToCart,decreaseAmount,increaseAmount }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
