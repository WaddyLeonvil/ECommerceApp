import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './Slider.css'
import { sliderItems } from '../data';

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    return (
        <div className="slider-container">
            <div className="slider-arrow" id='arrow-left' onClick={() => handleClick('left')}>
                <ArrowLeftOutlined />
            </div>
            <div className="slider-wrapper" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
                {sliderItems.map((item) => (
                    <div className="slide" style={{backgroundColor: `#${item.bg}`}}>
                        <div className="slider-img-container">
                            <img src={item.img} alt='First' className='slider-img'/>
                        </div>
                        <div className="slider-info-container">
                            <h1 className="slider-title">
                                {item.title}
                            </h1>
                            <p className="slider-desc">
                                {item.desc}
                            </p>
                            <button className="slider-btn">SHOP NOW</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="slider-arrow" id='arrow-right' onClick={() => handleClick('right')}>
                <ArrowRightOutlined />
            </div>
        </div>
    )
}
