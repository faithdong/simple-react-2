/*
 * @Author: zhongxd 
 * @Date: 2018-05-05 10:03:47 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-05 14:03:04
 * 纯UI组件
 */


 import React from 'react';

 import {Row , Col , Input , Button} from 'antd';

 class AddTodoRdx extends React.Component{

  render(){
    return(
      <Row>
        <Col sapn={12}>
          <Input placeholder="不允许为空" onChnage={this.props.getInputValue}/>
        </Col>
        <Col sapn={12}>
          <Button onClick={this.props.saveNewItem}>保存</Button>
        </Col>
      </Row>
    )
  }

 }

 export default AddTodoRdx;
