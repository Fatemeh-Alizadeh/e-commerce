import React from 'react';
import { useGlobalContext } from '../context';

const CartItem = ({item}) => {
    const { handleRemoveItem, handleUpdateCart } = useGlobalContext();
    
    return (
        <div className="cart-item" key={item.id}>
                            <img className='cart-img' src={item.media.source} alt={item.name} />
                            <div className="cart-desc">
                                <h5>{item.name}</h5>
                                <p>{item.line_total.formatted_with_symbol}</p>
                                <button className='cart-remove' type='button' onClick={ () =>handleRemoveItem(item.id)}>remove</button>
                            </div>
                            <div className="cart-control">
                                <button className='cart-increase' onClick={() =>handleUpdateCart(item.id, item.quantity + 1)}>+</button>
                                <p>{ item.quantity}</p>
                                <button className='cart-decrease' onClick={() =>handleUpdateCart(item.id, item.quantity - 1)}>-</button>
                            </div>
                       </div> 
    )
}

export default CartItem
