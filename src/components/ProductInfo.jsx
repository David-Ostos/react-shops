import React from 'react';
import '@styles/ProductInfo.scss';
import iClose from '@icons/icon_close.png';
import addCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
  return (
    <>
      <div className='product-img-info'>
        <img src={iClose} alt=" close" />
        <img src="https://images.pexels.com/photos/3525298/pexels-photo-3525298.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image product" />
      </div>
      <div className="product-info">
        <p>$35,00</p>
        <p>Wonder cat</p>
        <p>With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.</p>
        <button className="primary-button product-button">
          <img src={addCart} alt="car" />
      Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
