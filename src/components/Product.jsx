import React from 'react';
import { FaCartPlus, FaHeart } from "react-icons/fa"

const Product = ({ filterProduct }) => {
    console.log(filterProduct)
    return (
        <div className='product'>
            <img className='product-img' src={filterProduct.media.source} alt={filterProduct.name} />
            <button className='cart-button' type='button'> <FaCartPlus/></button>
            <button className='like-button' type='button'><FaHeart/></button>
            <h3 className='product-price'>{ filterProduct.price.formatted_with_symbol}</h3>
            <h4 className='product-name'>{ filterProduct.name}</h4>
            
        </div>
    )
}

export default Product
