
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import About from './components/pages/About';
import LinkButton from './components/LinkButton';

import uuid from 'uuid';
import Axios from 'axios';

import './styles/App.scss';

class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
      try {
          const todos = await Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');

          this.setState({ todos: todos.data});
      } catch (e) {
          console.error(e);
      }
  }

  markComplete = id => {
      this.setState({
          todos: this.state.todos.map(todo => {
              if (todo.id === id) {
                  todo.completed = !todo.completed;
              }

              return todo;
          })
      });
  };

  createItemByTitle = title => {
      return {
          id: uuid.v4(),
          title: title,
          completed: false
      };
  };

  addTodoItem = (title) => {
      const todo = this.createItemByTitle(title);

      this.setState({
          todos: [...this.state.todos, todo]
      });
  };

  removeItem = id => {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  };

  render() {
      return (
          <Router>
              <div className="App">
                  <Route exact path="/" render={props => (
                      <React.Fragment>
                          <TodoForm addTodoItem = {this.addTodoItem} />
                          <Todos todos = {this.state.todos}
                                 markComplete = {this.markComplete}
                                 removeItem = {this.removeItem}/>
                          <LinkButton path={'/about'} title={'About'}/>
                      </React.Fragment>
                  )}/>
                  <Route exact path="/about" render={props => (
                      <React.Fragment>
                          <About />
                          <LinkButton path={'/'} title={'Home'} />
                      </React.Fragment>
                  )} />
              </div>
          </Router>
      );
  }
}

export default App;
