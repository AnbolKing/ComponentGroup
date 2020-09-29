import React, { Component} from 'react';
import './App.css';
import Header from './components/Header';
import Test from './components/Test';
import SlideLoad from './components/Lazy/slideLoad/index';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      percent:0
    }
  }
  
  componentDidMount() {
    let domAfter = document.getElementsByClassName('load-after');
    if (domAfter) {
      domAfter[0].style.display = 'none';
    }
    document.onreadystatechange = () => {
      let time = setInterval(() => {
        if(document.readyState === "complete") {
          this.setState({
            percent:100,
          });
          setTimeout(() => {
            clearInterval(time);
            document.getElementsByClassName('load-before')[0].style.display = 'none';
            domAfter[0].style.display = '';
          },1000);
        }
        else {
          this.setState({
            percent:this.state.percent+1,
          })
        }
      },300)
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="load-after">
          <Header></Header>
          <Test></Test>
        </div>
        <div className="load-before">
          <SlideLoad percent={this.state.percent}></SlideLoad>
        </div>
      </div>
    )
  }
}

export default App;
