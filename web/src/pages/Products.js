import React, { useEffect, useState } from 'react';
// import { getProducts } from '../services/productService';

const Products = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const products = await getProducts();
  //     setProducts(products);
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div className='content'>
      <h1>Products</h1>
      <ul>
        {/* {products.map(product => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Products;
