/*
 * @Author: zhongxd 
 * @Date: 2018-05-05 10:09:25 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-11 17:18:47
 * 纯UI组件 todofilterrdx
 */

import React from 'react';
import { Row, Col,Button } from 'antd';

class TodoFilterRdx extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col span={8}>
            Show:
            {' '}
            <Button type="primary" onClick={this.props.showAll}>All</Button>
            {' '}
            <Button type="dashed" onClick={this.props.shwActive}>Active</Button>
            {' '}
            <Button type="danger" onClick={this.props.showCompleted}>Completed</Button>
          </Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
        </Row>
      </div>
    )
  }
}

export default TodoFilterRdx;