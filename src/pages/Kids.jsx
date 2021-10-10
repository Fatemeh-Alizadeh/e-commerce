import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context'
import Product from '../components/Product';
import Loading from '../components/Loading';



const Kids = () => {
    
    const { fetchFilterProducts, products } = useGlobalContext();
    const [loading, setLoading] = useState(true);
   
   useEffect(() => {
       fetchFilterProducts('kids')
     setLoading(false);
   }, []);
    
    if (loading) {
        return <Loading />
    }
   
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

export default Kids
