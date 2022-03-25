import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
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
            <Search style={{color: "gray", fontSize: 16}} />
          </div>
        </div>
        <div className="navbar-center">
          <h1 className="navbar-logo">WLCommerce</h1>
        </div>
        <div className="navbar-right">
          <div className="navbar-menu-item">REGISTER</div>
          <div className="navbar-menu-item">SIGN IN</div>
          <div className="navbar-menu-item">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge> 
          </div>
        </div>
      </div>
    </div>
  )
}
