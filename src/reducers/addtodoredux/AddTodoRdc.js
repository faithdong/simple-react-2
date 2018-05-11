/*
 * @Author: zhongxd 
 * @Date: 2018-05-07 10:35:52 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-11 16:44:47
 * 
 * Action 与 reducers 关系
 * 理解Action
 * 1、首先：Action 在 Redux 官网中 是指对行为的抽象；
 * 2、对行为的抽象，可以理解为 java中 定义的接口；
 * 理解reducers
 * 1、可以理解为 像是在java中  实现接口的 实现类的方法
 * 
 * 所以两者之间像是 接口定义  与 实现接口 的关系
 */



const todos = (state = [] , action) => {
  switch(action.type){
    case  'SAVE_NEW_ITEM':
      console.log(action);
      return [
        ...state,
        {
          id:action.id,
          text:action.text,
          completed:false
        }
      ];
      case 'ROW_CLICK':
        console.log("ROW_CLICK");
        console.log(state);
        return state.map(todo => 
          ( todo.id === action.id) ? {...todo,completed: !todo.completed} :todo
        );
      case 'SHOW_ALL':
        console.log('reducers-->SHOW_ALL');
        return todos;
      case 'SHOW_ACTION':
        console.log('reducers-->SHOW_ACTION');
        return todos.filter(todo => !todo.completed);  
    default :
      return state;

  }
}

export { todos };