/*
 * @Author: zhongxd 
 * @Date: 2018-05-02 22:06:38 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-03 00:49:22
 */

 import React from 'react';
 import {Row,Col,Input,Button} from 'antd';

 let count = 99;

 class AddTodo extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            addName:''
        };
        this.changeAddName = this.changeAddName.bind(this);
        this.saveNewItem = this.saveNewItem.bind(this);
    };

    //获取输入框的值
    changeAddName = (e) =>{
        console.log(e.target.value);
        this.setState({addName:e.target.value});
    };

    //保存数据
    saveNewItem = (e) =>{
        let newItem = {
            id: count++,
            text:'ss',
            complete: "false"
          }
       
        let data = this.state.data
        data = data.concat([newItem])
        this.setState({data})
    };

    render(){
        //let input = null;
        return(
            <Row gutter={24}>
                <Col  span={12}>
                    <Input value={this.state.addName} onChange={this.changeAddName} placeholder="Basic usage" />
                    {/* <Input ref={node => { input = node }}  /> */}
                </Col>
                <Col  span={12}>
                    <Button type="primary" onClick={this.saveNewItem}>保存</Button>
                </Col>
            </Row>
        )
    }

 }


 export default AddTodo;