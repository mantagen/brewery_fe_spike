import React from 'react';
import './App.css';

const Products = () => {
  const products = [{name:'citra pale',product_id : 1},{name:'citra something', product_id : 2},{name:'beer x', product_id : 3}]

  return products.map(product => {
    return <div>
      <p>{product.product_id}</p>
      <p>{product.name}</p> 
      </div>
  })
}



function App() {
  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;
