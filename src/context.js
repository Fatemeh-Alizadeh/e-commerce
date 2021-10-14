import React, { useState, useEffect, useContext } from "react";
import { commerce } from "./lib/commerce";
import WishList from "./pages/WishList";

const getLocalStorage = () => {
  let wishList = localStorage.getItem('wishList');
  if (wishList) {
    return (wishList = JSON.parse(localStorage.getItem('wishList')));
  } else {
    return [];
  }
};

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState(getLocalStorage());
  
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
    const {cart} = await commerce.cart.add(productId,quantity)
    setCart(cart)
  }
  const handleRemoveItem = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)
    setCart(cart)
  }
  const handleUpdateCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity })
    setCart(cart)
  }
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty()
    setCart(cart)
  }

  const handleAddToWishList = (product) => {
    setWishList([...wishList, product])
    console.log(wishList)
  }
  const handleRemoveWishListItem = (productId) => {
    setWishList(wishList.filter((item) => item.product.id !== productId));
  }
  const handleEmptyWishList = () => {
    setWishList([]);
  }
   
   useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishList));
   }, [wishList]);
  
  useEffect(() => {
    fetchCart();
    setLoading(false);
  }, [])


  return (
    <AppContext.Provider
      value={
        {
          products,
          loading,
          cart,
          wishList,
          fetchFilterProducts,
          handleAddToCart,
          handleRemoveItem,
          handleUpdateCart,
          handleEmptyCart,
          handleAddToWishList,
          handleRemoveWishListItem,
          handleEmptyWishList
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