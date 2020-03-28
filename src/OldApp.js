import React from 'react';
import './App.css';

const ProductsList = () => {
  const products = [{name:'East the Beast',product_id : 1},{name:'West Bay', product_id : 2},{name:'Utopian', product_id : 3},{name:'Utopian', product_id : 3},{name:'Half Hung',product_id : 4}]

  return products.map(product => {
    return <div>
      <p>{product.product_id}</p>
      <p>{product.name}</p> 
      </div>
  })
}

const Products = () => {
  return <div>
    <h1>Products</h1>
    <ProductsList />
  </div>
}

function App() {
  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;
