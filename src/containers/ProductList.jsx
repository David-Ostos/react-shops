import React from 'react';
import '@styles/ProductList.scss';
import ProductIem from '@components/ProductIem';

const HomeShop = () => {
  return (
    <section className="main-container">
      <div className="cards-container">
        <ProductIem/>
        <ProductIem/>
        <ProductIem/>
        <ProductIem/>
        <ProductIem/>
        <ProductIem/>
        <ProductIem/>
        <ProductIem/>
      </div>
    </section>

  );
};

export default HomeShop;
