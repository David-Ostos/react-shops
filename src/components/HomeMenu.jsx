import React from 'react';
import '@styles/HomeMenu.scss';

const HomeMenu = () => {
  return (
    <div className="desktop-menu">
      <ul>
        <li>
          <a href="#" className="title">My orders</a>
        </li>
        <li>
          <a href="#" className>My account</a>
        </li>
        <li>
          <a href="#" className>Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default HomeMenu;
