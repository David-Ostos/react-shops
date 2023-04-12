import React from 'react';
import '../styles/MyOrders.scss';
import flechita from '../../public/asset/icons/flechita.svg';

const MyOrders = () => {
  return (
    <div className="my-orders">
      <div className="my-orders-container">
        <h1 className="title">My orders</h1>
        <div className="my-orders-content">
          <div className="orders">
            <p>
              <span>04.25.2021</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={flechita} alt="arrow" />
          </div>
        </div>
        <div className="my-orders-content">
          <div className="orders">
            <p>
              <span>04.25.2021</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={flechita} alt="arrow" />
          </div>
        </div>
        <div className="my-orders-content">
          <div className="orders">
            <p>
              <span>04.25.2021</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={flechita} alt="arrow" />
          </div>
        </div>
        <div className="my-orders-content">
          <div className="orders">
            <p>
              <span>04.25.2021</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={flechita} alt="arrow" />
          </div>
        </div>
        <div className="my-orders-content">
          <div className="orders">
            <p>
              <span>04.25.2021</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={flechita} alt="arrow" />
          </div>
        </div>
        <div className="my-orders-content">
          <div className="orders">
            <p>
              <span>04.25.2021</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={flechita} alt="arrow" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default MyOrders;
