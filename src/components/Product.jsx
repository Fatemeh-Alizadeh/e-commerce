import React from 'react';
import { FaCartPlus, FaHeart } from "react-icons/fa"

const Product = ({ product }) => {
    return (
        <div className='product'>
            <img className='product-img' src={product.media.source} alt={product.name} />
            <button className='cart-button' type='button'> <FaCartPlus/></button>
            <button className='like-button' type='button'><FaHeart/></button>
            <h3 className='product-price'>{ product.price.formatted_with_symbol}</h3>
            <p className='product-name'>{ product.name}</p>
            
        </div>
    )
}

export default Product
