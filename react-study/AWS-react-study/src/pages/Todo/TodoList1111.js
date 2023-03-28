import React from 'react';
import { useState } from 'react';
import * as S from './style11111';

const TodoList = () => {
    const [userTodo, setUserTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleInputChange = (e) => {
        setUserTodo(e.target.value);
    }

    const handleAddButtonClick = () => {
        if (userTodo !== '') {
            setTodoList([...todoList, userTodo]);
            setUserTodo('');
        }
    }

    const remove = (index) => {
        setTodoList(todoList.filter(user => user.id !== index));
    }

    return (
        <div css={S.container}>
            <input type="text" value={userTodo} onChange={handleInputChange} />
            <button onClick={handleAddButtonClick}>추가</button>
            <div>
                <ul>
                    {todoList.map((todo, index) => (
                        <li key={index}>{todo}
                        <button onClick={remove}>삭제</button>
                        </li>
                        
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;