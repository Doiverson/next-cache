import React from 'react';
// import { unstable_noStore as noStore } from 'next/cache';

const getProduct = async () => {
  // noStore(); // Experimental
  let data = await fetch('https://fakestoreapi.com/products/1', {
    // cache: 'no-store',
  });
  let product = await data.json();
  return product;
};

export default async function Child() {
  const product = await getProduct();

  return (
    <div key={product.id}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
}
