import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import './ProductList.css';

export default function ProductList() {
    return (
        <main>
            <Navbar />
            <Announcement />
            <h1 className="product-list-title">
                Dresses
            </h1>
            <div className="filter-container">
                <div className="filter">
                    <span className="filter-text">
                        Filter Products:
                    </span>
                    <select name="" id="" className="product-list-select">
                        <option value="color" disabled selected>Color</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                    <select name="" id="" className="product-list-select">
                        <option value="size" disabled selected>Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <div className="filter">
                    <span className="filter-text">
                        Sort Products:
                    </span>
                    <select name="" id="" className="product-list-select">
                        <option value="newest" selected>Newest</option>
                        <option value="price-a">Price (asc)</option>
                        <option value="price-d">Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </main>
    )
}
