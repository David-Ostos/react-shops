import React from 'react';
import '../styles/MenuMobile.scss';

const MenuMobile = () => {
  return (
    <div className="mobile-menu">
      <ul>
        <h1>categories</h1>
        <li>
          <a href>All</a>
        </li>
        <li>
          <a href>Clothes</a>
        </li>
        <li>
          <a href>Electronics</a>
        </li>
        <li>
          <a href>Furnitures</a>
        </li>
        <li>
          <a href>Toys</a>
        </li>
        <li>
          <a href>Others</a>
        </li>
      </ul>
      <p className="line">
      </p>
      <ul className="account">
        <li>
          <a href>My orders</a>
        </li>
        <li>
          <a href>My account</a>
        </li>
      </ul>
      <ul>
        <li>
          <a className="email" href>platzi@example.com</a>
        </li>
        <li>
          <a className="sign-out" href>Sign out</a>
        </li>
      </ul>
    </div>

  );
};

export default MenuMobile;
