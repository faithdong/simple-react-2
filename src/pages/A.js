

import React from 'react';
import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Rate, Checkbox,
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class A extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:0
    };
    console.log("0--->constructor--->构造函数");
  }
  handleSubmit = (e) => {
    this.setState({count:this.state.count+1});
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  getDefaultProps = () => {
    console.log("1--->getDefaultProps--->设置默认的props，也可以用dufaultProps设置组件的默认属性");
  };
  getInitialState = () =>{
    console.log("2--->getInitialState--->在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props");
  };
  componentWillMount = () => {
    console.log("3--->componentWillMount--->组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。");
  };
  render() {
    console.log("4--->render--->react最重要的步骤，创建虚拟dom，进行diff算法，渲染dom。更新dom树都在此进行。此时就不能更改state了");
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="Plain Text"
        >
          <span className="ant-form-text">China</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Select"
          hasFeedback
        >
          {getFieldDecorator('select', {
            rules: [
              { required: true, message: 'Please select your country!' },
            ],
          })(
            <Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="use">U.S.A</Option>
            </Select>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Select[multiple]"
        >
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ],
          })(
            <Select mode="multiple" placeholder="Please select favourite colors">
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="InputNumber"
        >
          {getFieldDecorator('input-number', { initialValue: 3 })(
            <InputNumber min={1} max={10} />
          )}
          <span className="ant-form-text"> machines</span>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Switch"
        >
          {getFieldDecorator('switch', { valuePropName: 'checked' })(
            <Switch />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Checkbox"
        >
          {getFieldDecorator('Checkbox', { valuePropName: 'checked' })(
            <Checkbox />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Slider"
        >
          {getFieldDecorator('slider')(
            <Slider marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Radio.Group"
        >
          {getFieldDecorator('radio-group')(
            <RadioGroup>
              <Radio value="a">item 1</Radio>
              <Radio value="b">item 2</Radio>
              <Radio value="c">item 3</Radio>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Radio.Button"
        >
          {getFieldDecorator('radio-button')(
            <RadioGroup>
              <RadioButton value="a">item 1</RadioButton>
              <RadioButton value="b">item 2</RadioButton>
              <RadioButton value="c">item 3</RadioButton>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Rate"
        >
          {getFieldDecorator('rate', {
            initialValue: 3.5,
          })(
            <Rate />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Upload"
          extra="longgggggggggggggggggggggggggggggggggg"
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
                  </Button>
            </Upload>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Dragger"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            )}
          </div>
        </FormItem>

        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  };
  componentDidMount = () => {
    console.log("5--->componentDidMount--->组件渲染之后调用，只调用一次。");
  };
  compontentWillReceviceProps = (nextProps) => {
    console.log(nextProps + "6--->componentWillReceviceProps--->组件初始化时不调用，组件接收新的props时调用。");
  }
  shouldComponentUpdate = (nextProps,nextState) => {
    console.log(nextProps + "---->" + nextState);
    console.log("7--->shouldComponentUpdate--->react性能优化最重要的环节。组件接受新的state或则props时调用；"+
    "在此对比state和props是否相同，如果相同则返回false阻止更新，因为相同属性一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂时候。");
    return true;
  };
  componentWillUpdate = () => {
    console.log("8--->componentWillUpdate--->组件初始化时 不调用，只有在组件将要更新时才调用，此时可以修改state。");
  };
  componentDidUpdate = () => {
    console.log("9--->componentDidUpdate--->组件更新完成后调用，此时可以获取dom节点。");
  };
  componentWillUnmount = () => {
    console.log("10--->componentWillUnMount--->组件写卸载时调用，一些事件或定时器需要在此清除。")
  };
}

export default A = Form.create()(A);