import { Send } from '@material-ui/icons';
import React from 'react';
import './Newsletter.css';

export default function Newsletter() {
    return (
        <div className="newsletter-container">
            <h1 className="newsletter-title">
                Newsletter
            </h1>
            <div className="newsletter-desc">
                Get timely updates from your favorite products.
            </div>
            <div className="newsletter-input-container">
                <input type="text" placeholder="Your email" className="newsletter-input" />
                <button className="newsletter-btn">
                    <Send />
                </button>
            </div>
        </div>
    )
}
