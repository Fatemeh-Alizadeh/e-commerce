import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

import data from './data';



const Slider = () => {

    const [slider, setSlider] = useState(data);
    const [index, setIndex] = useState(0);

    return (
        <>
            <div className='slider'>
                {slider.map((slide, slideIndex) => {
                    const { id, category, img } = slide;

                    let position = 'nextSlide'
                    if (slideIndex === index) {
                       position = 'activeSlide'
                    }
                    if (slideIndex === index - 1 || (index === 0 && slideIndex === slider.length - 1)) {
                        position = 'lastSlide'
                    }
                    return (
                        <article className={position} key={id}>
                            <img className='slider-img' src={img} alt={category} />
                            <button type='button' className='button-left'><FaAngleDoubleLeft/></button>
                            <button type='button' className='button-right'><FaAngleDoubleRight/></button>
                            <h4 className='slider-name'>{ category}</h4>
                            <button type='button' className='slider-button'>shop now</button>
                        </article >
                       
                        
                    )
                    
                    
            })}
            
        </div>
        </>
        
    )
}

export default Slider
