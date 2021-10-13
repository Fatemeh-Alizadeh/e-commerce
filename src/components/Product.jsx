import React from 'react';
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { useGlobalContext } from '../context';

const Product = ({ product }) => {
    const {  handleAddToCart, handleAddToWishList } = useGlobalContext();
    return (
        <div className='product'>
            <img className='product-img' src={product.media.source} alt={product.name} />
            <button className='like-button' type='button' onClick ={() =>handleAddToWishList(product.id)}><FaHeart/></button>
            <button className='cart-button' type='button' onClick={() =>handleAddToCart(product.id, 1)}> <FaCartPlus/></button>
            <h3 className='product-price'>{ product.price.formatted_with_symbol}</h3>
            <p className='product-name'>{ product.name}</p>
            
        </div>
    )
}

export default Product
