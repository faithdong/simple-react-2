/*
 * @Author: zhongxd 
 * @Date: 2018-05-02 17:50:32 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-02 17:59:04
 */

//https://github.com/axuebin/react-todolist.git

 import React from 'react';
 import {Row, Col, Checkbox, Button} from 'antd';

 class TodoItem extends React.Component{
  
  constructor(props){
    super(props);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  };

  toggleComplete = (e) =>{
    e.preventDefault();
    this.props.toggleComplete(this.props.taskId);
  };

  deleteTask = (e) => {
    e.preventDefault();
    this.props.deleteTask(this.props.taskId);
  };


  render(){
    let task = this.props.task;
    let itemChecked;

    if(this.props.complete === 'true'){
      task = <del>{task}</del>
      itemChecked = true;
    }else{
      itemChecked = false;
    }
    return(
      <li className="list-group-item">
        <Row>
          <Col span={12}>
            <Checkbox checked={itemChecked} onChange={this.toggleComplete}/> {task}
          </Col>
          <Col span={12}>
            <Button type="danger" className="pull-right" onClick={this.deleteTask}>删除</Button>
          </Col>
        </Row>
      </li>
    )
  }


 }

 export default TodoItem;