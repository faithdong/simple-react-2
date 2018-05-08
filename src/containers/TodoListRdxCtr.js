/*
 * @Author: zhongxd 
 * @Date: 2018-05-08 22:17:20 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-08 23:41:44
 * 容器组件 列表
 */

 import React from 'react';
 import {connect} from 'react-redux';

 import TodoList from '../components/addtodoredux/TodoList';
 import {rowClick} from '../actions/addtodoredux/TodoItemRdxActions';

 class TodoListRdxCtr extends React.Component{
   constructor(props){
     super(props);
     this.state = {};
   }


	render(){
		return(
      <TodoList />
		)
	}
 }
 
 const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    rowClick: id => {
      dispatch(rowClick(id))
    }
  }
}

 TodoListRdxCtr = connect(
  mapStateToProps,
  mapDispatchToProps
 )(TodoList);

 export default TodoListRdxCtr;
