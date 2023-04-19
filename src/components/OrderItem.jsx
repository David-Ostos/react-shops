/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import iClose from '@icons/icon_close.png';

const OrderItem = ({ product, index }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = product => {
    removeFromCart(product, index);
  };

  return (
    <div className="shopping-carts">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>$ {product.price}</p>
      <img src={iClose} alt="close" onClick={() => handleRemove(product)} className='close-order-item' />
    </div>
  );
};

export default OrderItem;
