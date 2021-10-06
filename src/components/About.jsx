import React from 'react';

import about from '../img/heather-ford-5gkYsrH_ebY-unsplash.jpg'

const About = () => {
return (
    <section className='about-section'>
        <div className="about-picture">
            <img className='about-img' src={about} alt='about-us' />
        </div>
        <div className="about-text">
            <h2 className='about-title'> about us</h2>
            <p className='about-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae alias nostrum facere quis! Magnam deserunt aut facilis dolore provident vitae eum. Aut eligendi ipsa laboriosam, autem maiores magni iste. Tempora officiis reiciendis dolore numquam aliquid atque cumque perspiciatis quam autem.</p>
        </div>
        </section>
    )
}

export default About
