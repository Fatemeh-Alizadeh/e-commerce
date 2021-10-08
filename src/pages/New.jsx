import React, { useEffect, useState } from 'react';
import { commerce } from "../lib/commerce";

import Product from '../components/Product';


const New = () => {
   const [filterProducts, setFilterProducts] = useState([]);
    
   const fetchFilterProducts = async (category) => {
    const {data} = await commerce.products.list({
      category_slug: [category],
    });
    setFilterProducts(data)
    }
   
    useEffect(() => {
    fetchFilterProducts('new-arrival')
    }, []);
    return ( 
    <article>
        <div className="products-section">
            {filterProducts.map((filterProduct) => {
                return (
                    <Product key={filterProduct.id} filterProduct={ filterProduct}/>
                )
            })}
            
        </div>
    </article>
        
    )
}

export default New
