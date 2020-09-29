import React ,{ Component } from 'react';
import './style.css';
// import SpinVedio from '../Spin/vedio/index';
// import SpinMusic from '../Spin/music/index';
// import SpinRotate from '../Spin/rotate/index';
// import SpinPot from '../Spin/pot/index';
// import SpinTranslation from '../Spin/translation/index';
import ProgressLine from '../progress/index';

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
        <div>
        <ProgressLine></ProgressLine>
        </div>
      </div>
    )
  }
}

export default Test;