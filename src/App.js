import React, { Component} from 'react';
import './App.css';
import Header from './components/Header';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header></Header>
        <Test></Test>
      </div>
    )
  }
}

export default App;
