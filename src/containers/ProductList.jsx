import React from 'react';
import '@styles/ProductList.scss';
import ProductIem from '@components/ProductIem';
import useGetProducts from '@hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map(product => (
          <ProductIem product={product} key={product.id}/>
        ))}
      </div>
    </section>

  );
};

export default ProductList;
