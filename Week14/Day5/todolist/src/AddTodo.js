import React, { Component } from 'react';

class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    }

    handleChange = (event) => {
        this.setState({ newTodo: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('New todo:', this.state.newTodo);
        this.setState({ newTodo: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add a new todo:</label>
                <input
                    type="text"
                    placeholder="Enter new todo"
                    value={this.state.newTodo}
                    onChange={this.handleChange}
                />
                <button type="submit">Add Todo</button>
            </form>
        );
    }
}

export default AddTodo;
