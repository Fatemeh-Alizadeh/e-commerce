import React from 'react'
import { Link } from 'react-router-dom'

import { FaCartPlus, FaHeart } from "react-icons/fa";

export default function NavBar () {
    return (
        <nav>
            <div className='logo'>
                <h1>e.commerce</h1>
            </div>
            <div className='nav-list'>
                <ul className='nav-link'>
                     <li className='heart'>
                        <Link to='./WishList'><FaHeart /></Link>
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
                        <Link to='./Cart'><FaCartPlus/></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


