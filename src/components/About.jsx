import React,{useEffect} from 'react';

import { useGlobalContext } from '../context'

const About = () => {

    const [products, setProducts] = useGlobalContext();

    const filterProduct =() => {
         const newItems = products.filter((product) => product.name === 'about');
    setProducts(newItems);
    }
    /* useEffect(() => {
       filterProduct();
    }, []) */
    
    console.log(products)
    

    return (
        <div className='about-section'>
            <div className="about-img">
                {/* <img src={} alt="" /> */}
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
