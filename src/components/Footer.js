import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-container-left">
                <h1 className="footer-logo">
                    WLCommerce
                </h1>
                <p className="footer-desc">
                    This is the description of the footer to be replaced later.
                </p>
                <div className="footer-social-container">
                    <div className="footer-social-icon" style={{backgroundColor: "#3B5999"}}>
                        <Facebook />
                    </div>
                    <div className="footer-social-icon" style={{backgroundColor: "#E4405F"}}>
                        <Instagram />
                    </div>
                    <div className="footer-social-icon" style={{backgroundColor: "#55ACEE"}}>
                        <Twitter />
                    </div>
                    <div className="footer-social-icon" style={{backgroundColor: "#3B5999"}}>
                        <LinkedIn />
                    </div>
                </div>
            </div>
            <div className="footer-container-center">
                <h3 className="footer-title">
                    Useful Links
                </h3>
                <ul className="footer-list">
                    <li className="footer-list-item">Home</li>
                    <li className="footer-list-item">Cart</li>
                    <li className="footer-list-item">Man Fashion</li>
                    <li className="footer-list-item">Woman Fashion</li>
                    <li className="footer-list-item">Accesories</li>
                    <li className="footer-list-item">My Account</li>
                    <li className="footer-list-item">Order Tracking</li>
                    <li className="footer-list-item">Wishlist</li>
                    <li className="footer-list-item">Wishlist</li>
                    <li className="footer-list-item">Terms</li>
                </ul>
            </div>
            <div className="footer-container-right">
                <h3 className="footer-title">
                    Contact
                </h3>
                <div className="footer-contact-item">
                    <Room style={{marginRight: "10px"}} />
                    123 Appleseed St, Miami, FL, 45678
                </div>
                <div className="footer-contact-item">
                    <Phone style={{marginRight: "10px"}} />
                    123-456-7890
                </div>
                <div className="footer-contact-item">
                    <MailOutline style={{marginRight: "10px"}} />
                    email@wlcommerce.com
                </div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" className="footer-payment" />
            </div>
        </div>
    )
}
