/*
 * @Author: zhongxd 
 * @Date: 2018-05-02 22:11:53 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-03 01:07:08
 * 
 * 组合组件
 */


import React from 'react';
import AddTodo from './AddTodo';
import TodoItemList from './TodoItemList';

class TodoComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[
        {
          "id": "1",
          "text": "做一个TodoList Demo",
          "complete": "false"
        }, {
          "id": "2",
          "text": "学习ES6",
          "complete": "false"
        }, {
          "id": "3",
          "text": "Hello React",
          "complete": "true"
        }, {
          "id": "4",
          "text": "找工作",
          "complete": "false"
        }
      ]
    };
    this.handleRowClick = this.handleRowClick.bind(this);
    
  };

  handleRowClick(){
    console.log('TodoItemList --- rowClick');
  };
 
  render() {
    return (
      <div>
        <AddTodo />
        <TodoItemList data={this.state.data} rowClick={this.handleRowClick}></TodoItemList>
      </div>
    )
  }
}


export default TodoComponent;

