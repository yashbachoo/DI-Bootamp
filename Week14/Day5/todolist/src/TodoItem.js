import React from 'react';

function TodoItem({ task }) {
    return (
        <div className="collection-item">
            <span>{task}</span>
        </div>
    );
}

export default TodoItem;
