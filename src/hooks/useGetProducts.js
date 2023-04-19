import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };
    loadData();
  }, []);
  return products;
};

export default useGetProducts;
