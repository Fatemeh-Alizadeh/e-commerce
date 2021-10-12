import React from 'react';
import { useGlobalContext } from '../context';

const Cart = () => {
    const { cart } = useGlobalContext();
    console.log(cart)
    return (
        <div className="shopping-cart">
            <h1 className='cart-title'>shopping cart</h1>
            <div className="cart-list">
                {cart.line_items.map((item) => {
                    return (
                        <div className="cart-item" key={item.id}>
                            <img className='cart-img' src={item.media.source} alt={item.name} />
                            <div className="cart-desc">
                                <h5>{item.name}</h5>
                                <p>{item.line_total.formatted_with_symbol}</p>
                                <button className='cart-remove' type='button'>remove</button>
                            </div>
                            <div className="cart-control">
                                <button className='cart-increase'>+</button>
                                <p>{ item.quantity}</p>
                                <button className='cart-decrease'>-</button>
                            </div>
                       </div> 
                    )
                    
                    
                })}
            </div>
            <hr />
            <p className='cart-total'> total: {cart.subtotal.formatted_with_symbol}</p>
       </div>
    )
}

export default Cart
