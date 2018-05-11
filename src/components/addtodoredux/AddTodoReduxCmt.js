/*
 * @Author: zhongxd 
 * @Date: 2018-05-05 09:46:18 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-11 17:17:01
 * 添加redux的 component
 */

 import React from 'react';
 
 import AddTodoRdxCtr from '../../containers/AddTodoRdxCtr';
 import TodoListRdxCtr from '../../containers/TodoListRdxCtr';
 import TodoFilterRdxCtr from '../../containers/TodoFilterRdxCtr';

 class AddTodoReduxCmt extends React.Component{

  render(){
    return(
      <div>
        <AddTodoRdxCtr />
        <TodoListRdxCtr  />
        <TodoFilterRdxCtr />
      </div>
    )
  }

 }

 export default AddTodoReduxCmt;


