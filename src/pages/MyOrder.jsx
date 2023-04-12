import React from 'react';
import '../styles/MyOrder.scss';
import MyOrderItem from '../components/MyOrderItem';

const MyOrder = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="order-title">My order</h1>
        <div className="my-order-content">
          <div className="order">
            <p>
              <span>04.25.2021</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        <MyOrderItem/>
        <MyOrderItem/>
        <MyOrderItem/>
        <MyOrderItem/>
        <MyOrderItem/>
        <MyOrderItem/>
        <MyOrderItem/>
        <MyOrderItem/>
      </div>
    </div>

  );
};

export default MyOrder;
