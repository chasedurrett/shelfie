import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component{
  constructor(){
    super()
    this.state = {
      inventory: [{name: 'football', price: 7, img: "football.com"}, {name: 'baseball', price: 6, img: "baseball.com"}]
    }
  }
  render(){
    return (
      <div className="App">
       <Dashboard inventory={this.state.inventory}/>
       <Form /> 
       <Header />
      </div>
    );
  }
}

export default App;
