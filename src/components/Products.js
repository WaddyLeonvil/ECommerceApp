import React from 'react';
import Product from './Product';
import { popularProducts } from '../data';
import './Products.css';

export default function Products() {
    return (
        <div className="products-container">
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />    
            ))}
        </div>
    )
}
