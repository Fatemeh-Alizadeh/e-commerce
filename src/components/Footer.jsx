import React from 'react';
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='footer-section'>
            <div className="footer-text">
                <h4>follow us on:</h4>
            </div>
            <div className="footer-social">
                    <Link to='#' className='footer-icon'><FaFacebookSquare/></Link>
                    <Link to='#' className='footer-icon'><FaInstagram/></Link>
                    <Link to='#' className='footer-icon'><FaTwitter/></Link>
               </div>
            
        </footer>
    )
}

export default Footer
