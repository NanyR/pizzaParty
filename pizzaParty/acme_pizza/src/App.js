import React, { Component } from 'react';
import './App.css';
import CustomerForm from './components/CustomerForm'
import Order from './components/Order'
import Orders from './components/Orders'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Order/>
        <Orders/>
      </div>
    );
  }
}

export default App;
