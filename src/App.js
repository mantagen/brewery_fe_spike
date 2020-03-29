import React, { Component } from 'react';
import './App.css';  
import GetBatchIngredients from './components/GetBatchIngredients';
import GetProducts from './components/GetProducts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">Local Storage</h1>
        <GetProducts/>
        <br/>
        <h1 className="header">External API</h1>
        <GetBatchIngredients/>
      </div>
    );
  }
}

export default App;
