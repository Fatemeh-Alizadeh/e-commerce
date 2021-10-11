import React from 'react';
import { useGlobalContext } from '../context';

const Cart = () => {
    const { cart } = useGlobalContext();
    console.log(cart)
    return (
        <div className="shopping-cart">
            <h1 className='cart-title'>shopping cart</h1>
            <div className="cart-list">
               {/*  {cart.map((item) => {
                    return (
                        <div className="cart-item" key={item.id}>
                            <img src={item.media.source} alt={item.name} />
                            <div className="cart-desc">
                                <h5>{item.name}</h5>
                                <p>{item.price.formatted_with_symbol}</p>
                            </div>
                            <div className="cart-control">
                                <button className='cart-add'>+</button>
                                <p>{ item.total_items}</p>
                                <button className='cart-add'>-</button>
                            </div>
                       </div> 
                    )
                    
                    
                })} */}
            </div>
       </div>
    )
}

export default Cart
