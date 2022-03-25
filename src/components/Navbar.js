import { Search } from '@material-ui/icons';
import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar-container'>
        <div className="navbar-wrapper">
            <div className="navbar-left">
                <span className="language">EN</span>
                <div className="search-container">
                    <input type="text" className='navbar-input' />
                    <Search />
                </div>
            </div>
            <div className="navbar-center">Center</div>
            <div className="navbar-right">Right</div>
        </div>
    </div>
  )
}
