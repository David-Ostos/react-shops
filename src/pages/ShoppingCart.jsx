import React from 'react';
import '../styles/ShoppingCart.scss';
import flecha from '../../public/asset/icons/flecha left.png';
import OrderItem from '../components/OrderItem';

const ShoppingCart = () => {
  return (
    <div className="my-order-shopping">
      <div className="my-order-container-shopping">
        <div className="my-order-container-title-shopping">
          <figure>
            <img src={flecha} alt />
          </figure>
          <h1 className="title-shopping">Shopping cart</h1>
        </div>
        <div className="my-order-content-shopping shopping">
          <div className="shopping-carts-product">
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
          </div>
          <div className="order-shopping">
            <p>
          total
            </p>
            <p>$560.00</p>
          </div>
          <button className="primary-button">
        Checkout
          </button>
        </div>
      </div>
    </div>

  );
};

export default ShoppingCart;
