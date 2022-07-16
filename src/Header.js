import React from 'react'
import logo from './img/logo.png';
import './Header.css';
import {

  Link
} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (

    <nav className='header'>
      {/* Logo */}


      <Link to="/">
        <img className='header__logo' src={logo} alt="" />
      </Link>

      {/* Search Bar */}
      <div className="header__search">
        <input type="text" className="header__searchBar" />
        <SearchIcon className='header__SearchIcon'></SearchIcon>
      </div>

      {/* 3 links  */}
      <div className="header__nav">
        <Link to="/login" className='header__link'>
          <div className="header__option">
            <span className='header__lineone'>Hello Pankaj</span>
            <span className="header__linetwo">Sign in</span>
          </div>
        </Link>

        <Link to="/" className='header__link'>
          <div className="header__option">
            <span className='header__lineone'>Returns</span>
            <span className="header__linetwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className='header__link'>
          <div className="header__option">
            <span className='header__lineone'>Your</span>
            <span className="header__linetwo">Prime</span>
          </div>
        </Link>

        <Link to='/checkout' className='header__link' >
          <div className="header__optionBasket">
            {/* Shopping Basket icon */}

            <ShoppingBasketIcon />
            {/* NUumber of items in basket */}
            <span className="header__linetwo header__basketCount">0</span>
          </div>
        </Link>

      </div>
    </nav>


  )
}

export default Header