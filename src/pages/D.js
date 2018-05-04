/*
 * @Author: zhongxd 
 * @Date: 2018-05-02 22:14:18 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-02 22:29:22
 * 
 * 组合组件使用
 */


 import React from 'react';
 import TodoComponent from '../components/addtodo/TodoComponent';

 class D extends React.Component{
    render(){
        return (
            <TodoComponent />
        )
    }
 }

 export default D;
