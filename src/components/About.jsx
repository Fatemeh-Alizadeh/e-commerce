import React from 'react';

import { useGlobalContext } from '../context'

const About = () => {

    const [products, setProducts] = useGlobalContext();

    const filterProduct = (name) => {
        
        const newProduct = products.filter((product) => product.name === 'about');
        setProducts(newProduct)
    }
    

    return (
        <div className='About-section'>
            <div className="about-img">
                {/* <img src={products.media.source} alt="" /> */}
            </div>
            <div className="about-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laboriosam eius commodi cumque architecto sapiente tenetur porro error maxime expedita!
                </p>
                </div>
            
        </div>
    )
}

export default About
