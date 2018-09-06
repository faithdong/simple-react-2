/*
 * @Author: zhongxd 
 * @Date: 2018-09-06 10:22:12 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-06 10:49:59
 * 
 * 菜单
 */

import { isUrl } from '../utils/utils';
 const menuData = [
   {
     name:'dashboard',
     icon:'dashboard',
     path:'dashboard',
     children:[
       {
         name:'分析页',
         path:'anlysis',
       },
     ]
   },
   {
     name:'表单页',
     icon:'form',
     path:'form',
     children:[
       {
         name:'基础表单',
         path:'basic-form',
       },
     ]
   },
   {
     name:'sub1',
     icon:'user',
     path:'sub1',
     children:[
       {
         name:'使用antd组件',
         path:'cmt-antd-a',
       },
       {
         name:'简单组件封装',
         path:'cmt-simple-b',
       },
       {
         name:'Todo封装组合组件',
         path:'cmt-todo-c'
       },
       {
         name:'Redux简单示例',
         paht:'rdx-simple-d',
       },
       {
         name:'Todo-Redux实例',
         path:'todo-rdx-e'
       },
     ],
   }
 ];

 function formatter(data,parentPath='/',parentAuthority){
   return data.map(item => {
    let { path } = item;
    if(!isUrl(path)){
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority:item.authority || parentAuthority,
    };
    if(item.children){
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority)
    }
    return result;
   });
 }

 export const gtMenuData = () => formatter(menuData);