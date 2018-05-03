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
          "completed": true,
        }, {
          "id": "2",
          "text": "学习ES6",
          "completed": false,
        }, {
          "id": "3",
          "text": "Hello React",
          "completed": true,
        }, {
          "id": "4",
          "text": "找工作",
          "completed": false,
        }
      ],
      
    };
    this.handleRowClick = this.handleRowClick.bind(this);
    this.saveNewItem = this.saveNewItem.bind(this);
    
  };

  /**
   * 生成 n 位随机数
   */
  generateRandomNum = (n) =>{
    let rnd = '';
    for(let i=0;i<n;i++){
      rnd += Math.floor(Math.random() * 10);
    }
    return rnd;
  };

  /**
   * 行click
   */
  handleRowClick(){
    console.log('TodoComponent --- rowClick');
  };

  /**
   * 保存数据
   */
  saveNewItem = (event,addName) => {
    let rNum = this.generateRandomNum(4);
    let newItem = [
      {
        id:rNum,
        completed:false,
        text:addName
      }
    ];
    let data = this.state.data;
    data = data.concat(newItem);
    this.setState({data:data});
  };
 
  render() {
    return (
      <div>
        <AddTodo saveNewItem={this.saveNewItem}/>
        <TodoItemList data={this.state.data} rowClick={this.handleRowClick}></TodoItemList>
      </div>
    )
  }
}


export default TodoComponent;

