/*
 * @Author: zhongxd 
 * @Date: 2018-05-07 10:35:52 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-07 14:54:41
 */



const AddTodoRdc = (state = [] , action) => {
  switch(action.type){
    case 'GET_INPUT_VALUE':
      return null;
    case  'SAVE_NEW_ITEM':
      console.log('1111');
      return null;
    default :
      return null;

  }
}

export default AddTodoRdc;