/*
 * @Author: zhongxd 
 * @Date: 2018-05-05 14:26:43 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-07 17:19:44
 */

let nextTodoId = 0
export const saveNewItem = text => {
  console.log('actions-sveNewItem' + text.addItem);
  return {
    type: 'SAVE_NEW_ITEM',
    id: nextTodoId++,
    text
  }
} 




