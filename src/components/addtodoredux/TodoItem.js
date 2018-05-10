/*
 * @Author: zhongxd 
 * @Date: 2018-05-08 15:53:21 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-08 23:44:29
 * 单行数据组件
 * 用于渲染列表数据
 */

 import React from 'react';
 

 class TodoItem extends React.Component{
   constructor(props){
     super(props);
     this.rowClick = this.rowClick.bind(this);
   }

   rowClick = (e) =>{
     console.log('TodoItem--rowClick');
     this.props.rowClick(this.props.id);
   }
  render(){
    return(
      <li onClick={this.rowClick}
        style={{textDecoration:this.props.completed ? 'line-through':'none',
        cursor: this.props.completed ? 'default' : 'pointer',  
        color: this.props.completed ? '#f00' : '#000'  }}>
        {this.props.text}
      </li>
    )
  }
 }

 export default TodoItem;
