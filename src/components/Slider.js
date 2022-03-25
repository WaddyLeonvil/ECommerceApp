import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import './Slider.css'

export default function Slider() {
    return (
        <div className="slider-container">
            <div className="slider-arrow" id='arrow-left'>
                <ArrowLeftOutlined />
            </div>
            <div className="slider-wrapper">
                
            </div>
            <div className="slider-arrow" id='arrow-right'>
                <ArrowRightOutlined />
            </div>
        </div>
    )
}
