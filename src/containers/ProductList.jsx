import React, { useEffect, useState } from 'react';
import '@styles/ProductList.scss';
import ProductIem from '@components/ProductIem';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);

  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map(product => (
          // eslint-disable-next-line react/jsx-key
          <ProductIem/>
        ))}
      </div>
    </section>

  );
};

export default ProductList;
