/*
 * @Author: zhongxd 
 * @Date: 2018-05-08 16:25:23 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-05-08 23:40:52
 * todo 列表
 */

import React from 'react';

import TodoItem from './TodoItem';


class TodoList extends React.Component {

  render() {
    console.log(this.props.todos);
    return (
      <ul>
        {
          this.props.todos.map((todo, index) =>
            <TodoItem key={index}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            rowClick={this.props.rowClick}/>
          )
        }
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
)(TodoList);

TodoList = connect()(TodoList); */

export default TodoList;