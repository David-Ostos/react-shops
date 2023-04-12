import React from 'react';
import addCart from '../../public/asset/icons/bt_add_to_cart.svg';

const ProductIem = () => {
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
        <figure>
          <img src={addCart} alt />
        </figure>
      </div>
    </div>
  );
};

export default ProductIem;
