import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import HomeMenu from './HomeMenu';
import ShoppingCart from '../pages/ShoppingCart';
import logo from '@logos/logo_yard_sale.svg';
import iconMenu from '@icons/icon_menu.svg';
import iconShopping from '@icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toaggleOrders, setToaggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  /*   const verifyCart = (cartNumber) => {
    if (cartNumber && (cartNumber <= 9)) {
      return (
        <div>{cartNumber}</div>
      );
    } else if (cartNumber > 9) {
      return (
        <div>+9</div>
      );
    } else {
      return null;
    }
  }; */

  return (
    <nav>
      <img src={iconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo-nav" />
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Clothes</a>
          </li>
          <li>
            <a href="#">Electronics</a>
          </li>
          <li>
            <a href="#">Furnitures</a>
          </li>
          <li>
            <a href="#">Toys</a>
          </li>
          <li>
            <a href="#">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com</li>
          <li className="navbar-shopping-cart" onClick={() => setToaggleOrders(!toaggleOrders)}>
            <img src={iconShopping} alt="shopping car" />
            { state.cart.length > 0 && <div>{ state.cart.length > 9 ? '+9' : state.cart.length }</div> }
          </li>
        </ul>
      </div>
      {toggle && <HomeMenu/>}
      {toaggleOrders && <ShoppingCart/>}
    </nav>
  );
};

export default Header;
