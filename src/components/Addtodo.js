import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Addtodo extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    title: ''
  };
  handleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addtodo(this.state.title);
    this.setState({ title: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          placeholder='Add Todo'
          style={{ flex: '10', padding: '5px' }}
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='submit'
          value='Submit'
          className='btn'
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

Addtodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Addtodo;
