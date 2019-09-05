import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        const { todos } = this.props;

        const mapTodos = () =>
            todos.map(
                todo =>
                    (<TodoItem key = { todo.id }
                               todo = {todo}
                               markComplete = { this.props.markComplete }
                               removeItem = { this.props.removeItem }
                    />)
            );

        return <div className={'todo-list'}>{ mapTodos(todos) }</div>;
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Todos;
