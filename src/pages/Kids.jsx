import React, {useEffect} from 'react';

import { useGlobalContext } from '../context'

const Kids = () => {
    const  [kidsProducts, setKidsProducts]  = useGlobalContext();
   
    return (
        <div className='comingSoon'>
            <h3>coming soon</h3>
        </div>
    )
}

export default Kids
