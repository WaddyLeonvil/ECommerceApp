import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import './Product.css';

export default function Product({item}) {
    return (
        <div className="product-container">
            <div className="product-circle">
                
            </div>
            <img src={item.img} alt="" className="product-image" />
            <div className="product-info">
                <div className="product-icon">
                    <ShoppingCartOutlined />
                </div>
                <div className="product-icon">
                    <SearchOutlined />
                </div>
                <div className="product-icon">
                    <FavoriteBorderOutlined />
                </div>
            </div>
        </div>
    )
}
