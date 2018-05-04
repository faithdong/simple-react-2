/*
 * @Author: zhongxd 
 * @Date: 2018-05-03 16:32:25 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-04 00:13:14
 */

 import React from 'react';
 import { Button } from 'antd';

 class FilterLink extends React.Component{

  constructor(props){
    super(props);
    this.showAll = this.showAll.bind(this);
    this.showActive = this.showActive.bind(this);
    this.showCompleted = this.showCompleted.bind(this);
  };

  /**
   * 显示选取
   */
  showAll = () =>{
    this.props.showAll();
  }

  /**
   * 显示为完成
   */
  showActive = () =>{
    this.props.showActive();
  }

  /**
   * 显示完成
   */
  showCompleted = () =>{
    this.props.showCompleted();
  }

  render(){
    return(
      <div style={{margin:20,padding:20}}>
       <Button type="primary" onClick={this.showAll}>All</Button>
       <Button type="success" onClick={this.showActive}>Active</Button>
       <Button type="danger" onClick={this.showCompleted}>COMPLETED</Button>
      </div>
    )
  }

 }

 export default FilterLink;