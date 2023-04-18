import React, { useState } from 'react';
import addCart from '@icons/bt_add_to_cart.svg';

const ProductIem = () => {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([]);
  };

  return (
    <div className="product-card">
      <figure className="product-img">
        <img src="https://images.pexels.com/photos/2686914/pexels-photo-2686914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt className="product-card" />
      </figure>
      <div className="product-info">
        <div>
          <p>$ 120,00</p>
          <p> Round sheif</p>
        </div>
        <figure onClick={handleClick}>
          <img src={addCart} />
        </figure>
      </div>
    </div>
  );
};

export default ProductIem;
