/*
 * @Author: zhongxd 
 * @Date: 2018-05-11 16:46:19 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-11 17:16:32
 * 容器组件 过滤器
 */

 import React from 'react';
 import {connect} from 'react-redux';
 import TodoFilterRdx from '../components/addtodoredux/TodoFilterRdx';
 import { showAll , showActive , showCompleted } from '../actions/addtodoredux/TodoFilterRdxAction';

 class TodoFilterRdxCtr extends React.Component{
  render(){
    return (
      <TodoFilterRdx />
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
    showAll: id => {
      dispatch(showAll())
    },
    shwActive: () =>{
      dispatch(showActive())
    },
    showCompleted: () => {
      dispatch(showCompleted())
    }
  }
}

TodoFilterRdxCtr = connect(
  mapStateToProps,
  mapDispatchToProps
 )(TodoFilterRdx);

 
 export default TodoFilterRdxCtr;
