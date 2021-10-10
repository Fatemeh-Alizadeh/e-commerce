import React, { useState, useEffect, useContext } from "react";
import { commerce } from "./lib/commerce";


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

/* const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  } */
  
  const fetchFilterProducts = async (category) => {
    const {data} = await commerce.products.list({
      category_slug: [category],
    });
    setProducts(data)
    }
   

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId.quantity)
    setCart(item.cart)
  }
   
  useEffect(() => {
    fetchCart();
   }, []);



  return (
    <AppContext.Provider
      value={
        {
          products,
          fetchFilterProducts
        }
      }
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }