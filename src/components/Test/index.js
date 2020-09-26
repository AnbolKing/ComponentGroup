import React ,{ Component } from 'react';
import './style.css';
import Mask from '../Mask/index';
// import Confirm from '../Confirm/index';
import Info from '../Info/index';

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
            // <Confirm
            //   content={
            //     <div>
            //       <p>1. 保证是本人参加工作室招新笔试，如有虚假信息和作假行为，本人承担由此而产生的一切后果。</p>
            //       <p>2. 在考试过程中，自觉服从工作室监考人员的安排，接受工作室监考人员的检查、监督和管理。</p>
            //       <p>3. 保证在考试中诚实守信，自觉遵守考试的管理规定、考试纪律。</p>
            //       <p>4. 家园工作室会严格保管笔试答卷，保护笔试同学的个人信息安全。</p>
            //       <p>5.考试时间共<span>120分钟</span>，请把握好时间</p>
            //       <p>祝：取得满意成绩</p>
            //       <p>欢迎有想法的你加入我们，一起做点儿了不起的事。</p>
            //     </div>
            //   }
            //   okText={'立即前往'}
            //   cancelText={'我再想想'}
            //   title={'大胆的选择吧'}
            //   onOK={this.handleOk}
            //   onCancel={this.handleCancel}
            // ></Confirm>
            <Info
              onOK={this.handleOk}
              title={'想要更换组别嘛'}
              content={<div>
                <p>请联系管理员</p>
                <p>qq: 272344341</p>
                <p>tel: 18370605879</p>
              </div>}
              text={'好的'}
            ></Info>
          }
        >
        </Mask>
        <button onClick={this.handleShowMask}>点我测试</button>
      </div>
    )
  }
}

export default Test;