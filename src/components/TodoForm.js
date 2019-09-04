import React, { Component } from 'react';

class TodoForm extends Component {
    state = {
        title: ''
    };

    handleAddItemClick = () => {
        if (this.state.title) {
            this.props.addTodoItem(this.state.title);
            this.setState({title: ''});
        }
    };

    handleChange = (e) => this.setState({title: e.target.value});

    render() {
        return (
            <div className={'todo-form'}>
                <input type="text"
                       placeholder={'To do'}
                       value={this.state.title}
                       onChange={this.handleChange}
                       className={'input-default'} />
                <button className={'button-default'}
                        onClick={this.handleAddItemClick}>
                    Submit
                </button>
            </div>
        );
    }
}

export default TodoForm;
