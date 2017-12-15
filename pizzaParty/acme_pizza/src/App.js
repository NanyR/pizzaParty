import React, { Component } from 'react';
import './App.css';
import CustomerForm from './components/CustomerForm'
import Order from './components/Order'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Order/>
      </div>
    );
  }
}

export default App;
