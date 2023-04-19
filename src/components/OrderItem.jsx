/* eslint-disable react/prop-types */
import React from 'react';
import iClose from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
  return (
    <div className="shopping-carts">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>$ {product.price}</p>
      <img src={iClose} alt="close" />
    </div>
  );
};

export default OrderItem;
