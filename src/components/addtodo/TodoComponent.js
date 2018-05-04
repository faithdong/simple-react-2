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
import TodoFooter from './TodoFooter';

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
    this.all = this.all.bind(this);
    this.active = this.active.bind(this);
    this.completed = this.completed.bind(this);
    
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
  handleRowClick(id){
    console.log('TodoComponent --- rowClick');
    let data = this.state.data;
    for(let i=0;i<data.length;i++){
      if(data[i].id ===  id.toString()){
        data[i].completed = !data[i].completed;
      }
    }
    this.setState({data:data});
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

  /**
   * 显示所有
   */
  all = () =>{
    let data = this.state.data;
    this.setState({data:data});
  };

  /**
   * 未完成
   */
  active = () => {
    let data = this.state.data;
    let activeData = data.filter( t => !t.completed);
    this.setState({data:activeData});
  };

  /**
   * 完成
   */
  completed = () => {
    let data = this.state.data;
    let cplData = data.filter( t => t.completed);
    this.setState({data:cplData});
  };

  render() {
    return (
      <div>
        <AddTodo saveNewItem={this.saveNewItem}/>
        <TodoItemList data={this.state.data} rowClick={this.handleRowClick}></TodoItemList>
        <TodoFooter showAll={this.all} showActive={this.active} showCompleted={this.completed}/>
      </div>
    )
  }
}


export default TodoComponent;

