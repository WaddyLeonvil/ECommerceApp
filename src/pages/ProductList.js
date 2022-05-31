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
                    Filter
                </div>
                <div className="filter">
                    Filter2
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </main>
    )
}
