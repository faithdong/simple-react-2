/*
 * @Author: zhongxd 
 * @Date: 2018-05-08 16:25:23 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-08 17:51:39
 * todo 列表
 */

import React from 'react';
import { connect } from 'react-redux'
import TodoItem from './TodoItem';
import {rowClick} from '../../actions/addtodoredux/TodoItemRdxActions';
//import { todos } from '../../reducers/addtodoredux/AddTodoRdc';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.rowClick = this.rowClick.bind(this);
  }


  rowClick = (id) => {
    console.log('TodoList--rowClick-->  ' + id );
    this.props.dispatcher(rowClick(id));
  }

  render() {
    console.log(this.props.todos);
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem key={todo.id} {...todo} rowClick={this.rowClick(todo.id)} />
        ))}
      </ul>
    )
  }

}

/* const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    rowClick: id => {
      dispatch(rowClick(id))
    }
  }
}

TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList); */

TodoList=connect()(TodoList);

export default TodoList;