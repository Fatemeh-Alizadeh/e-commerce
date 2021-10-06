import React, { useState, useEffect, useContext } from "react";
import { commerce } from "./lib/commerce";


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }
  const fetchFilterProducts = async (category) => {
    const {data} = await commerce.products.list({
  category_slug: [category],
    });
    setFilterProducts(data)
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchFilterProducts('kids')
  }, []);

   console.log(filterProducts)
  return (
    <AppContext.Provider
      value={
        [products, setProducts]
        
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