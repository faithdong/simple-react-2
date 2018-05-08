/*
 * @Author: zhongxd 
 * @Date: 2018-05-08 16:14:37 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-08 16:35:05
 */


 const todoListItem = (state = [] , action) => {

  switch (action.type){
    case 'ROW_CLICK':
      return state.map(todo => 
        ( todo.id === action.id) ? {...todo,completed: !todo.completed} :todo
      )
      //return
    default :
      return state;
  }
 }

 export {todoListItem};