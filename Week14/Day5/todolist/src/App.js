import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './ToDo.css';


class Content extends Component {
    render() {
        return (
          <>
          <TodoList></TodoList>
          <AddTodo></AddTodo>
    
          
          </>

        );
    }
}

export default Content;


