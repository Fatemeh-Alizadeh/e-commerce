import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context'
import ProductsList from '../components/ProductsList';
import Loading from '../components/Loading';



const Womens = () => {
    const { fetchFilterProducts, loading } = useGlobalContext();
   
   useEffect(() => {
       fetchFilterProducts('womens')
   }, []);
    
    if (loading) {
        return <Loading />
    }
    return ( 
   <ProductsList/>
    )
}


export default Womens
