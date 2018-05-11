/*
 * @Author: zhongxd 
 * @Date: 2018-05-05 10:45:15 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-11 16:47:27
 * 添加项的容器组件
 */


import React from 'react';
import { connect } from 'react-redux';
import {saveNewItem} from '../actions/addtodoredux/AddTodoRdxActions';



import {Form , Input, Button } from 'antd';


const FormItem = Form.Item;

class AddTodoRdxCtr extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    let formData = this.props.form.getFieldsValue();
    //console.log(formData);
    this.props.dispatch(saveNewItem(formData.addItem));
    //formData.addItem = '';
    this.props.form.setFieldsValue({'addItem':''});
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem >
          {getFieldDecorator('addItem', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input  placeholder="输入新增项" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
          >
            保存
          </Button>
        </FormItem>
      </Form>
    )
  }

}


AddTodoRdxCtr = Form.create()(AddTodoRdxCtr);
AddTodoRdxCtr = connect()(AddTodoRdxCtr);


export default AddTodoRdxCtr ;