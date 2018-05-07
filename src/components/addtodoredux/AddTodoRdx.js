/*
 * @Author: zhongxd 
 * @Date: 2018-05-05 10:03:47 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-07 15:35:10
 * 纯UI组件
 */


import React from 'react';

import { Row, Col, Input, Button } from 'antd';

class AddTodoRdx extends React.Component {
 
  render() {
    return (
      <div>
        <Row gutter={24}>
          <Col sapn={4}>
            <Input placeholder="不允许为空" 
             />
          </Col>
          <Col sapn={12}>
            <Button >保存</Button>
          </Col>
        </Row>
      </div>
    )
  }

}

export default AddTodoRdx;
