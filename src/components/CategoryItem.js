import React from 'react'
import './CategoryItem.css'

export default function CategoryItem({item}) {
    return (
        <div className="cat-item-container">
            <img src={item.img} alt="" className='cat-item-img' />
            <div className="cat-item-info">
                <h1 className="cat-item-title">
                    {item.title}
                </h1>
                <button className="cat-item-btn">
                    SHOP NOW
                </button>
            </div>
        </div>
    )
}
