/*
 * @Author: zhongxd 
 * @Date: 2018-05-02 17:57:58 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-02 18:05:04
 */


 import React from 'react';
 import TodoItem from './TodoItem';


 class TodoList extends React.Component{
  constructor(props){
    super(props);
    
  };

  render(){
    let taskList = this.props.data.map(listItem =>
      <TodoItem 
        taskId = {listItem.id}
        key = {listItem.id}
        task = {listItem.task}
        completed = {listItem.complete}
        toggleComplete = {this.props.toggleComplete}
        deleteTask = {this.props.deleteTask}
      >
      </TodoItem>
    )
    return(
      <ul className="list-group">
        {taskList}
      </ul>
    )
  }


 }


 export default TodoList;