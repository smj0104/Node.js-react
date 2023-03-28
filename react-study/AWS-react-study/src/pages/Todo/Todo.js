/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { useRef } from 'react';
import PromptModal from '../../components/Todo/Modal/PromptModal/PromptModal';
import TodoList from '../../components/Todo/TodoList/TodoList';
import AddTodo from '../../components/Todo/AddTodo/AddTodo';

const TodoContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    width: 100%;
`;

const Todo = () => {
    const [isOpen, setIsOpen] = useState(false);  //기본값false

    const [modifyTodo, setModifyTodo] = useState({
        id: 0,
        content: ''
    });
    const [input, setInput] = useState({
        id: 0,
        content:''
    });

    const [todoList, setTodoList] = useState([]);
    const todoId = useRef(1);

    const onChange = (e) => {

        setInput({
            ...input,
            content: e.target.value
        });
    }

    const onKeyUp = (e) => {
        if(e.keyCode === 13) {
            onAdd();
        }
    }

    const onAdd = () => {
        const todo = {
            ...input,
            id: todoId.current++
        }

        setTodoList([...todoList, todo]);
        setInput({...input, content: ''});
    }

    const onRemove = (id) => {
        setTodoList(todoList.filter(
            todo => {
                return todo.id !== id;  //매개변수로 id전달
            }
        ))
    }

    const updateTodo = (modifyTodo) => {
        setTodoList(
            todoList.map(
                todo => {
                    if(todo.id === modifyTodo.id) {
                        todo.content = modifyTodo.content;
                    }   
                    return todo;    
                }
            )
        )
    }


    const openModal = (id) => {
        setIsOpen(true);
        setModifyTodo(todoList.filter(
            todo => todo.id === id
        )[0]);

        setIsOpen(true);
    }

    return (
    <>
        <div css={TodoContainer}>
            <AddTodo onChange={onChange} onKeyUp={onKeyUp} valeue={input.content} onAdd={onAdd} />
            {todoList.map(
                todo => {
                    return (
                      <TodoList todo={todo} openModal={openModal} onRemove={onRemove}/>
                    );
                }
            )}
        </div>
        {isOpen ? (<PromptModal title={'Edit Todo'} todo={modifyTodo} setIsOpen={setIsOpen} updateTodo={updateTodo} />) : ''}  
    </>     //true일시modal을 렌더링함
    );
};

export default Todo;