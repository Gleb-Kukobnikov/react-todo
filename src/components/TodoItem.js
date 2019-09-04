import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getCompletedStyle = () => {
        return this.props.todo.completed
            ? ' completed'
            : '';
    };

    render() {
        const { id, title } = this.props.todo;

        return (
            <div className={'todo-item' + this.getCompletedStyle()}>
                <input type="checkbox" checked={this.props.todo.completed} onChange={ this.props.markComplete.bind(this, id) }/>

                <p>{ title }</p>

                <button className={'remove-item'} onClick={ this.props.removeItem.bind(this, id) }>x</button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoItem;
