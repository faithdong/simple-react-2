/*
 * @Author: zhongxd 
 * @Date: 2018-05-02 23:26:04 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-03 01:03:24
 * 这是 TodoItem 组件 的集合
 */

 import React from 'react';
 import TodoItem from './TodoItem';

 class TodoItemList extends React.Component{

	constructor(props){
		super(props);
		this.state = {};
	};

	render(){
		let taskList = this.props.data.map((item,index) => (
			<TodoItem 
				key={item.id}
				text={item.text}
				complete={item.complete}
				rowClick={this.props.rowClick}
			/>
		));
		return(
			<ul>
				{taskList}
			</ul>
		)
	}

 }

 export default TodoItemList;