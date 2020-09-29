import React, { Component} from 'react';
// import './App.css';
// import Header from './components/Header';
// import Test from './components/Test';
import SlideLoad from './components/Lazy/slideLoad/index';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        {/* <Header></Header>
        <Test></Test> */}
        <SlideLoad></SlideLoad>
      </div>
    )
  }
}

export default App;
