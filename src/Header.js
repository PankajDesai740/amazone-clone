import React from 'react'
import logo from './img/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <nav className='header'> 
    {/* Logo */}
    <Link to = "/"> 
    <img className='header__logo' src={logo} alt="" />
    </Link> 

    {/* Search Bar */}
    <div className="header__search">
    <input type="text" className="header__searchBar" />
    <SearchIcon className='header__SearchIcon'></SearchIcon>
    </div>

    {/* 3 links  */}
    <div className="header__nav">
      <Link to ="/login" className='header__link'>
        <div className="header__option">
          <span>Hello Pankaj</span>
          <span>Sign in</span>
        </div>
      </Link>

      <Link to ="/" className='header__link'>
        <div className="header__option">
          <span>Returns</span>
          <span>& Orders</span>
        </div>
      </Link>

      <Link to ="/" className='header__link'>
        <div className="header__option">
          <span>Your</span>
          <span>Prime</span>
        </div>
      </Link>

    </div>

    </nav>

  )
}

export default Header