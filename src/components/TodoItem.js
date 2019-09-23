//writen with help of Brad - https://www.youtube.com/watch?v=sBws8MSXN7A
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component {
  getStyle() {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  }

  render() {
    const { title, id } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
            checked={this.props.todo.completed}
          />{' '}
          {'  '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  padding: '5px 9px',
  cursor: 'pointer',
  float: 'right',
  outline: 'none'
};

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todoitem;
