/*
 * @Author: zhongxd 
 * @Date: 2018-05-08 15:53:21 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-08 17:55:09
 * 单行数据组件
 * 用于渲染列表数据
 */

 import React from 'react';
 

 class TodoItem extends React.Component{

  constructor(props){
    super(props);
    //this.rowClick = this.props.rowClick.bind(this); 
  }

  

  render(){
    return(
      <li onClick={this.props.rowClick}
        style={{TextDecoder:this.props.completed ? 'line-through':'none'}}>
        {this.props.text};
      </li>
    )
  }
 }

 export default TodoItem;
