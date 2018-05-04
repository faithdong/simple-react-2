/*
 * @Author: zhongxd 
 * @Date: 2018-05-03 16:28:24 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-03 16:32:02
 * todo 底部组件
 */

 import React from 'react';
 import FilterLink from './FilterLink';

 class TodoFooter extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  };

  render(){
    return(
      <FilterLink showAll={this.props.showAll} showActive={this.props.showActive} showCompleted={this.props.showCompleted} />
    )

  }



 }

 export default TodoFooter;
