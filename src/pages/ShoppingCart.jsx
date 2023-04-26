import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/ShoppingCart.scss';
import flecha from '@icons/flecha left.png';
import OrderItem from '@components/OrderItem';

const ShoppingCart = (props) => {
  const { state } = useContext(AppContext);

  // eslint-disable-next-line react/prop-types
  const { toggleOrders, setToggleOrders } = props; // se destructura el props para poder utilizarlo

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
            <i className="fa-solid fa-arrow-left flechita" onClick={() => setToggleOrders(!toggleOrders)}></i>
          </figure>
          <h1 className="title-shopping">Shopping cart</h1>
        </div>
        <div className="my-order-content-shopping shopping">
          <div className="shopping-carts-product">
            {state.cart.map((product, index) => (
              <OrderItem product={product} key={index} index={index}/>
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
