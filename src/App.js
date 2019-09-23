import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/Addtodo';
import About from './components/pages/about';
// import uuid from 'uuid';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.markComplete = this.markComplete.bind(this);
    this.delTodo = this.delTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  state = {
    todos: []
  };
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(javab => this.setState({ todos: javab.data }));
  }

  markComplete(id) {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) item.completed = !item.completed;
        return item;
      })
    });
  }
  delTodo(id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(javab =>
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      );
  }
  addTodo(title) {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title: title,
    //   completed: false
    // };
    const newTodo = {
      title: title,
      completed: false
    };
    axios
      .post('https://jsonplaceholder.typicode.com/todos', newTodo)
      .then(javab =>
        this.setState({ todos: [...this.state.todos, javab.data] })
      );

    console.log(title);
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={props => (
                <React.Fragment>
                  <Addtodo addtodo={this.addTodo} />
                  <Todos
                    markComplete={this.markComplete}
                    todos={this.state.todos}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
