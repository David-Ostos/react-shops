/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useContext } from 'react';
import addCart from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';

const ProductIem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = item => {
    addToCart(item);
  };

  return (
    <div className="product-card">
      <figure className="product-img">
        <img src={product.images[0]} alt={product.title} className="product-card" />
      </figure>
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addCart} />
        </figure>
      </div>
    </div>
  );
};

export default ProductIem;
