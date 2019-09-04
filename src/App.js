import React, {Component} from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

import './styles/App.scss';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Make homework',
        completed: false
      },
      {
        id: 3,
        title: 'Learn React',
        completed: false
      }
    ]
  };

  markComplete = id => {
      this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
      });
  };

  createItemByTitle = title => {
      return {
          id: this.state.todos.length + 1,
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
            <div className="App">
              <TodoForm addTodoItem = {this.addTodoItem} />
              <Todos todos = {this.state.todos}
                     markComplete = {this.markComplete}
                     removeItem = {this.removeItem}/>
            </div>
        );
  }
}

export default App;
