import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import Loading from '../components/Loading';
import ProductsList from '../components/ProductsList';


const New = () => {
   const {  fetchFilterProducts ,products, loading } = useGlobalContext();
    
   useEffect(() => {
       fetchFilterProducts('new-arrival');
   }, []);
    
    if (loading) {
        return <Loading />
    }
    return ( 
   <ProductsList/>
        
    )
}

export default New
