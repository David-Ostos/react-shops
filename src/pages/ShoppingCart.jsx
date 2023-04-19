import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/ShoppingCart.scss';
import flecha from '@icons/flecha left.png';
import OrderItem from '@components/OrderItem';

const ShoppingCart = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

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
            {state.cart.map(product => (
              <OrderItem product={product} key={`orderItem-${product.id}`}/>
            ))}
          </div>
          <div className="order-shopping">
            <p>
          total
            </p>
            <p>${sumTotal()}</p>
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
