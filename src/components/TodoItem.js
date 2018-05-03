/*
 * @Author: zhongxd 
 * @Date: 2018-05-02 23:09:09 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-03 01:04:08
 * AddTodo 组件的保存按钮执行后，将把执行结果保存到此组件中
 * 用于接收并保存 用户输入的结果
 */

import React from 'react';


class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.rowClick = this.rowClick.bind(this);
    };
    rowClick = (e) =>{
        //console.log("TodoItem -- rowClick");
        this.props.rowClick();
    };

    render() {
        return (
            <li
                onClick={this.rowClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }}
            >
                {this.props.text}
            </li>
        )
    }

}


export default TodoItem;
