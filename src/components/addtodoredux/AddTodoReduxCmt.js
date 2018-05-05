/*
 * @Author: zhongxd 
 * @Date: 2018-05-05 09:46:18 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-05 14:37:06
 * 添加redux的 component
 */

 import React from 'react';
 import AddTodoRdx from '../../containers/AddTodoRdx';
 import TodoListRdx from './TodoListRdx';
 import TodoFilterRdx from './TodoFilterRdx';

 class AddTodoReduxCmt extends React.Component{

  render(){
    return(
      <div>
        <AddTodoRdx />
        <TodoListRdx />
        <TodoFilterRdx />
      </div>
    )
  }

 }

 export default AddTodoReduxCmt;


