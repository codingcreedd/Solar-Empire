import { createContext, useState } from "react";
export const Context = createContext(null);

const ContextProvider = ({children}) => {
    const [cartCount, setCartCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const states = {
        cartCount, setCartCount,
        cart, setCart,
        totalAmount, setTotalAmount
    }

  return (
    <Context.Provider value={states}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider;