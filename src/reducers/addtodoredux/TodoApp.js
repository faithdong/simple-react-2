/*
 * @Author: zhongxd 
 * @Date: 2018-05-07 10:36:39 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-07 14:44:48
 */



import { combineReducers } from 'redux';
import AddTodoRdc from './AddTodoRdc';

const todoApp = combineReducers({
  AddTodoRdc,
  //visibilityFilter
})

export default todoApp;