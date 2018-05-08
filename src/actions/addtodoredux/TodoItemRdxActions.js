/*
 * @Author: zhongxd 
 * @Date: 2018-05-08 16:01:18 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-08 16:08:27
 * 
 * TodoList 组件的 Action
 */

 export const rowClick = (id) =>{
   console.log('TodoListRdxActions--rowClick--> ' + id);
   return{
     type:'ROW_CLICK',
     id:id
   }
   
 }
