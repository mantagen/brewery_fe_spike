import React, { Component } from 'react';
import './App.css';  
import GetBatchIngredients from './components/GetBatchIngredients';
import GetProducts from './components/GetProducts';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">GET request for products</h1>
        <GetProducts/>
        <br/>
        {/* <h1 className="header">GET request for ingredinets by batch</h1>
        <GetBatchIngredients/> */}
        <h1 className="header">POST request for product</h1>
        <Post/>  
      </div>
    );
  }
}

export default App;
