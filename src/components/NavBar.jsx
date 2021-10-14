import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context';
import { FaCartPlus, FaHeart } from "react-icons/fa";

export default function NavBar() {
    const { cart, wishList } = useGlobalContext();
    return (
        <nav>
            <div className='logo'>
                <h1>e.commerce</h1>
            </div>
            <div className='nav-list'>
                <ul className='nav-link'>
                    <li>
                        <div className='nav-icon'>
                            <Link to='./WishList'><FaHeart /></Link>
                            <span className='nav-badge'>{ wishList.length}</span>
                        </div>
                        
                    </li>
                    <li>
                        <Link to='./'>home</Link>
                    </li>
                     <li>
                        <Link to='./Kids'>kids</Link>
                    </li>
                     <li>
                        <Link to='./Mens'>mens</Link>
                    </li>
                     <li>
                        <Link to='./Womens'>womens</Link>
                    </li>
                    <li>
                        <div className='nav-icon'>
                            <Link to='./Cart'><FaCartPlus/></Link>
                            <span className='nav-badge'>{ cart.total_items}</span>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </nav>
    )
}


