import React ,{ Component } from 'react';
import './style.css';
// import Mask from '../Mask/index';
import Message from '../Message/index'

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
        <Message
          show={this.state.show}
          content={'这是一小段测试内容'}
          title={'这是一个标题'}
          time={1000}
          position={{
            // top:'30px'
          }}
        ></Message>
        <button onClick={this.handleShowMask}>点我测试</button>
      </div>
    )
  }
}

export default Test;