import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";

const ProductsList = () => {
  const products = [
    { name: "East the Beast", product_id: 1 },
    { name: "West Bay", product_id: 2 },
    { name: "Utopian", product_id: 3 },
    { name: "Utopian", product_id: 3 },
    { name: "Half Hung", product_id: 4 }
  ];

  return products.map(product => {
    return (
      <div>
        <p>{product.product_id}</p>
        <p>{product.name}</p>
      </div>
    );
  });
};

const ProductAdder = () => {
  return (
    <div>
      <h1>Add new product...</h1>
      <form>
        <input id="name"></input>
        <label for="name">name</label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ProductsList />
      <Link to="./insert">Add new product</Link>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Products path="/products" />
        <ProductAdder path="/products/insert" />
      </Router>
    </div>
  );
}

export default App;
