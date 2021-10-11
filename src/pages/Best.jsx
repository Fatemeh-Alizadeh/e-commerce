import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context'
import ProductsList from '../components/ProductsList';
import Loading from '../components/Loading';

const Best = () => {
    const { fetchFilterProducts, loading } = useGlobalContext();
   
   useEffect(() => {
       fetchFilterProducts('best')
   }, []);
    
    if (loading) {
        return <Loading />
    }
    return ( 
    <ProductsList/>
        
    )
}

export default Best
