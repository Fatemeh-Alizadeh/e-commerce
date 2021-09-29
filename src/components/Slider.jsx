import React from 'react'

const Slider = () => {

    const data = [
        {
            id: 1,
            category: 'new arrival',
            img:'../img/clark-street-mercantile-P3pI6xzovu0-unsplash' 
        }
    ]

    
    return (
        <div className='slider-componet'>
            <h1>{data[0].category}</h1>
            
        </div>
    )
}

export default Slider
