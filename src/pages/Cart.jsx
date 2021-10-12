import React from 'react';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context';
import CartItem from '../components/CartItem';


const Cart = () => {
    const { cart, loading } = useGlobalContext();
    console.log(cart);
    if (cart.total_items === 0) {
        return (
            <div className="cart-epmty">
           <p>your cart is empty!</p>
       </div>)
    }
    if (!cart.line_items) {
        return <Loading/>
    }
    return (
        <div className="shopping-cart">
            <h1 className='cart-title'>shopping cart</h1>
            <div className="cart-list">
                {cart.line_items.map((item) => {
                    return (
                        <CartItem key={item.id} item={item}/>
                    )
                    
                    
                })}
            </div>
            <hr />
            <div className="cart-checkout">
                <div >
                    <button type='button' className='checkout-button'> empty cart </button>
                    <button type='button' className='checkout-button'>chechout</button>    
                </div>
                <p className='cart-total'> total: {cart.subtotal.formatted_with_symbol}</p>
            </div>
            
       </div>
    )
}

export default Cart
