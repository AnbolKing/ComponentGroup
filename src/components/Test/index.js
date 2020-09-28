import React ,{ Component } from 'react';
import './style.css';
import SpinVedio from '../Spin/vedio/index';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false,
      confirm:false
    }
  }
  

  handleShowMask = () => {
    this.setState({
      show:true,
      confirm:true
    })
  }

  handleOk = () => {
    this.setState({
      show:false,
      confirm:false
    })
  }

  handleCancel = () => {
    this.setState({
      show:false,
      confirm:false
    })
  }

  render() {
    return (
      <div className="test-container">
        <button onClick={this.handleShowMask}>点我测试</button>
        <SpinVedio></SpinVedio>
      </div>
    )
  }
}

export default Test;