/*
 * @Author: zhongxd 
 * @Date: 2018-05-05 09:46:18 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-07 14:27:48
 * 添加redux的 component
 */

 import React from 'react';
 import AddTodoRdxCtr from '../../containers/AddTodoRdxCtr';
 import TodoListRdx from './TodoListRdx';
 import TodoFilterRdx from './TodoFilterRdx';

 class AddTodoReduxCmt extends React.Component{

  render(){
    return(
      <div>
        <AddTodoRdxCtr />
        <TodoListRdx />
        <TodoFilterRdx />
      </div>
    )
  }

 }

 export default AddTodoReduxCmt;


