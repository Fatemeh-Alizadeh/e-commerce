import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context'
import ProductsList from '../components/ProductsList';
import Loading from '../components/Loading';


const Sale = () => {
    const { fetchFilterProducts, loading } = useGlobalContext();
   
   useEffect(() => {
       fetchFilterProducts('sale')
   }, []);
    
    if (loading) {
        return <Loading />
    }
    return ( 
   <ProductsList/>
        
    )
}

export default Sale
