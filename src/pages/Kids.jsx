import React, { useEffect, useState } from 'react';
import { commerce } from "../lib/commerce";
import { useGlobalContext } from '../context'

import Product from '../components/Product';



const Kids = () => {
    const [filterProducts, setFilterProducts] = useState([]);
     const {loading } = useGlobalContext()
 
    const fetchFilterProducts = async (category) => {
    const {data} = await commerce.products.list({
      category_slug: [category],
    });
    setFilterProducts(data)
    }
   
    useEffect(() => {
    fetchFilterProducts('kids')
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

export default Kids
