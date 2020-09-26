import React ,{ Component } from 'react';
import './style.css';
import Mask from '../Mask/index';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false
    }
  }
  

  handleShowMask = () => {
    this.setState({
      show:true
    })
  }

  render() {
    return (
      <div className="test-container">
        <Mask show={this.state.show} content={
            <div>
              This is mask content
            </div>
          }
        >
        </Mask>
        <button onClick={this.handleShowMask}>点我测试</button>
      </div>
    )
  }
}

export default Test;