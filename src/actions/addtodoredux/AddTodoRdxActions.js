/*
 * @Author: zhongxd 
 * @Date: 2018-05-05 14:26:43 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-05 14:32:41
 */

let nextTodoId = 0
export const saveNewItem = text => {
  return {
    type: 'SAVE_NEW_ITEM',
    id: nextTodoId++,
    text
  }
} 