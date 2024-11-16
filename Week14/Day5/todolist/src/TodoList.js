import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const tasks = ['Buy some milk', 'Do my homework'];
        return (
            <div className="todos collection">
                {tasks.map((task, index) => (
                    <TodoItem key={index} task={task} />
                ))}
            </div>
        );
    }
}

export default TodoList;
