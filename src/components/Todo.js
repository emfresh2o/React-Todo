import React from "react";
import "./Todo.css";

const Todo = props => {
    return (
        <div
            onClick={() => props.toggleItem(props.todo.id)}
            className={`todo${props.todo.completed ? ' completed' : ''}`}
            >
                <p id='todo-items' style={{ color: 'white', fontSize: '20px' }}>{props.todo.name}</p>
        </div>
    );
};



export default Todo;