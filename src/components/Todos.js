import React, { useState } from 'react';

function TodoItem({ TodoItem, onToggle }) {
    return (
        <li
            style={{
                textDecoration: todo.don ? 'line-through' : 'none'
            }}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    );
}

function TodoList({ todos, onToggle }) {
    return (
        <ul>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
                ))}
        </ul>
    );
}

function Todos ({ todos, onCreate, onToggle }) {
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);

    return (
        <div>
            <form>
                <input />
                <button>등록</button>
            </form>
        </div>
    )
}