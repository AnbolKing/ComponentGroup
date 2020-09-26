import React ,{ Component } from 'react';
import './style.css';
import Mask from '../Mask/index';
import Button from '../Button/index';

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
        <Mask show={this.state.show} content={
            <div>
              <Button
                text={'测试'}
                onOK={() => {console.log('button');}}
                type={'color'}
              ></Button>
              <Button
                text={'测试'}
                onOK={() => {console.log('button');}}
                type={'ok'}
              ></Button>
              <Button
                text={'测试'}
                onOK={() => {console.log('button');}}
                type={'danger'}
              ></Button>
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