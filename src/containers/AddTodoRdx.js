/*
 * @Author: zhongxd 
 * @Date: 2018-05-05 10:45:15 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-05 14:48:17
 * 逻辑组件
 */


import React from 'react';
import { connect } from 'react-redux'
import AddTodoRdx from '../components/addtodoredux/AddTodoRdx';
import {saveNewItem} from '../actions/addtodoredux/AddTodoRdxActions';

class AddTodoRdxCtr extends React.Component {

}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveNewItem: () => {
      console.log('containers--AddTdoRdxCtr--saveNewItem');
      dispatch(saveNewItem);
    },
    getInputValue: () => {
      console.log('containers--AddTdoRdxCtr--getInputValue');
    }
  }
}

/*  const AddTodoRdxCtr = connect(
  mapStateToProps,
  mapDispatchToProps
 )(AddTodoRdx); */

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoRdx);