/*
 * @Author: zhongxd 
 * @Date: 2018-05-07 10:36:39 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-08 23:50:10
 */



import { combineReducers } from 'redux';
import {todos} from './AddTodoRdc';
import {todoListItem} from './TodoItemRdc';

const todoApp = combineReducers({
  todos,
  //todoListItem
  //visibilityFilter
})

export default todoApp;