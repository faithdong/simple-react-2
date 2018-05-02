/*
 * @Author: zhongxd 
 * @Date: 2018-05-02 17:42:20 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-02 18:17:49
 * 头部带有 button 按钮的 组件
 */


 import React from 'react';
 import ReactDOM from 'react-dom';
 import {Form, Input, Button,notification } from 'antd';

 class AddTodoItem extends React.Component{

  constructor(props){
    super(props);
    this.saveNameItem = this.saveNameItem.bind(this);
  };

  saveNameItem(e){
    e.preventDefault()
    let element = ReactDOM.findDOMNode(this.refs.newItem)
    let task = element.value
    if (!task) {
      notification.open({
        description: 'Todo内容不得为空！',
    });
    } else {
      this.props.saveNewItem(task)
      element.value = ""
    }
  };

  render(){
    return(
      <div className="addtodoitem">
        <Form.Item>
          <label htmlFor="newItem"></label>
          <Input id="newItem" ref="newItem" type="text" placeholder="吃饭睡觉打豆豆" />
          <Button type="primary" className="pull-right" onClick={this.saveNameItem}>保存</Button>
        </Form.Item>
      </div>
    )
  }

 }


 export default AddTodoItem;
