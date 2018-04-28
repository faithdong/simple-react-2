/*
 * @Author: zhongxd 
 * @Date: 2018-04-27 10:46:28 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-04-27 16:44:00
 * React 简单组件封装
 */

import React from 'react';
import PropType from 'prop-types';

class C extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count:props.value || 0, caption:props.caption || ''};
  };


  onClickIncrementButton = (e) => {
    e.preventDefault();
    this.setState({count: this.state.count + 1});
  };

  onClickDecrementButton = (e) =>{
    e.preventDefault();
    this.setState({count: this.state.count - 1});
  };
  
  render() {
    return (
      <div >ES6 语法封装的简单组件
        <p>
          Click Count: {this.state.count}
        </p>
        <button onClick={this.onClickIncrementButton.bind(this)}>+</button>
        <span>{this.state.caption} count: {this.state.count}</span>
        <button onClick={this.onClickDecrementButton.bind(this)}>-</button>
      </div>
      
    )
  }
}

C.propType = {
  count:PropType.number.isRequired,
  caption: PropType.string.isRequired
};

C.defaultProps = {
  count:0,
};


export default C;

