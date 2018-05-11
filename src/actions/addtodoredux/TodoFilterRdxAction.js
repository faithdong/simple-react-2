/*
 * @Author: zhongxd 
 * @Date: 2018-05-11 16:34:14 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-11 16:39:50
 */


 export const showAll = () =>{
  console.log('actions-showAll----> ' );
  return {
    type: 'SHOW_ALL',
  }
 }

 export const showActive = () => {
   console.log('actions--showActive-->');
   return {
     type:'SHOW_ACTION'
   }
 }

 export const showCompleted = () =>{
   console.log('actions--showCompleted-->');
   return {
     type:'SHOW_COMPLETED'
   }
 }
 //shwActive
 //showCompleted