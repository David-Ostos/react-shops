import React from 'react';
import iClose from '../../public/asset/icons/icon_close.png';

const OrderItem = () => {
  return (
    <div className="shopping-carts">
      <figure>
        <img src="https://images.pexels.com/photos/2686914/pexels-photo-2686914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt />
      </figure>
      <p>super love</p>
      <p>$ 120.00</p>
      <img src={iClose} alt="close" />
    </div>
  );
};

export default OrderItem;
