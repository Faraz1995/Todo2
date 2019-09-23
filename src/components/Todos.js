import React, { Component } from 'react';
import Todoitem from './TodoItem';
import PropTypes from 'prop-types';
class Todos extends Component {
  render() {
    // let td = this.props.todos.map(item => {
    //   return item.title;
    // });
    return this.props.todos.map(item => (
      <Todoitem
        key={item.id}
        todo={item}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
