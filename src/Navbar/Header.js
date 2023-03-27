import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
          Logo
        </a>
        <Navbar />
        <Searchbar />
      </div>
    </header>
  );
};

export default Header;
