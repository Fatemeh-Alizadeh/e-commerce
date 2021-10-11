import React from 'react';
import Product from './Product';
import { useGlobalContext } from '../context'

const ProductsList = () => {
    const { products } = useGlobalContext();
    return (
        <article>
        <div className="products-section">
           {products.map((product) => {
                return (
                   <Product key={product.id} product={product} />
                )
            })}
            
        </div>
    </article>
    )
}

export default ProductsList
