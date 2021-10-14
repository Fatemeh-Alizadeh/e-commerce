import React from 'react';
import { useGlobalContext } from '../context';

const WishListItem = ({ item }) => {
    const { handleAddToCart, handleRemoveWishListItem } = useGlobalContext();
    return (
        <div className='wishlist-item'>
            <img className='cart-img' src={item.product.media.source} alt={item.product.name} />
            <div className="cart-desc">
                <p className='wishlist-name'>{item.product.name}</p>
                <p className='wishlist-price'>{item.product.price.formatted_with_symbol}</p>
            </div>
            <div className="wishlist-controll">
                <button type='button' className='wishlist-button' onClick={() =>handleAddToCart(item.product.id, 1)}>add to cart</button>
                <button type='button' className='wishlist-button' onClick={() =>handleRemoveWishListItem(item.product.id)}>remove</button>
            </div>
        </div>
    )
}

export default WishListItem
