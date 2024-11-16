import React, {Component} from 'react';

 class Content extends Component {
    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's</h1>
                <div className="todos collection">
                    <div className="collection-item">
                        <span>Buy some milk</span>
                    </div>
                    <div className="collection-item">
                        <span>Do my homework</span>
                    </div>
                </div>
                <form>
                    <label>Add a new todo:</label>
                    <input type="text" placeholder="Enter new todo" />
                </form>
            </div>
        );
    }
}

export default Content;
            