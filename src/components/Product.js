import React from 'react';
import './Product.css';

export default function Product({item}) {
    return (
        <div className="product-container">
            <div className="product-circle">
                
            </div>
            <img src={item.img} alt="" className="product-image" />
            <div className="product-info"></div>
        </div>
    )
}
