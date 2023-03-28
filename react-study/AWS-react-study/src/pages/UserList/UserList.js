/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';

const UserList = () => {
    useEffect(() => {  //컴포넌트 렌더링시 1회 실행
        console.log("컴포넌트 렌더링");
    }, []);

    const user = {  //초기값 (정의만 해둠)
        id: 0,
        username: '',
        password: '',
        name: '',
        email: '',
        modifyFlag: false 
           
    }

    const userIndex = useRef(1);  //1부터 시작 index값 자동 증가를 위해 만들어둠
    const [users, setUsers] = useState([]); 
    const [inputs, setInputs] = useState(user);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const addButtonRef = useRef();

    const inputHandler = (e) => {

        const { name, value } = e.target;  //이벤트가 일어난 타입의 name,value를 가져옴
        setInputs({...inputs, [name]: value});  //해당 value를 가져와 겹치는건 덮어줌 (입력이 일어난 내옹으로)
    }

    const keyupHandler = (e) => {  //(e) event가 일어난 지점
        if(e.keyCode === 13) {
            let index = 0;
            switch(e.target.name) {   //타입에 따라 index변수값을 바꿔줌
                case 'username': index = 1; break;
                case 'password': index = 2; break;
                case 'name': index = 3; break;
                default: addButtonRef.current.click();
            }
            if(index !== 0) {
                inputRefs[index].current.focus();
            }
        }
    }

    const addHandler = (e) => {  //얕은 복사 깊은 복사 차이알기
        const user = {
            ...inputs
        };

        user.id = userIndex.current++;

        setUsers([...users, user]);
    }

    const onRemove = (index) => {
        //users.splice(index - 1, 1);
        //setUsers([...users]);
        //const copyUsers = users.filter(user => user.id !== index)

        setUsers(users.filter(user => user.id !== index));
    }

    const onModify = (index) => {
        setUsers(users.map(user => {  //map에서 user 꺼냄
            if(user.id === index) {
                setInputs({...user});//수정 버튼 누를시 입력된 값으로 바꿔줌 
                user.modifyFlag = true;  //input을 넣기전엔 true상태
            }else {
                user.modifyFlag = false;
            }
            return user;
        }));
    }

    const onSave = (index) => {
        setUsers(users.map(user => {
            if(user.id === index) {
                return {
                    ...inputs, //다시 false로 덮임
                    id: user.id
                };
            }
            return user;
        }));
    }

    // const users = [
    //     {
    //         id: '1',
    //         username: 'aaa',
    //         password: '1234',
    //         name: 'AAA',
    //         email: 'aaa@GMail.com'
    //     },
    //     {
    //         id: '2',
    //         username: 'bbb',
    //         password: '1234',
    //         name: 'BBB',
    //         email: 'BBB@GMail.com'
    //     },
    //     {
    //         id: '3',
    //         username: 'ccc',
    //         password: '1234',
    //         name: 'CCC',
    //         email: 'CCC@GMail.com'
    //     }
    // ]

    return (
        <div css={S.container}> 
            <div>
                <input
                    type="text"
                    onKeyUp={keyupHandler}
                    onChange={inputHandler}
                    placeholder='username'
                    name='username'
                    ref={inputRefs[0]}/>
                <input
                    type="text"
                    onKeyUp={keyupHandler}
                    onChange={inputHandler}
                    placeholder='password'
                    name='password'
                    ref={inputRefs[1]}/>
                <input
                    type="text"
                    onKeyUp={keyupHandler}
                    onChange={inputHandler}
                    placeholder='name'
                    name='name'                    
                    ref={inputRefs[2]}/>
                <input
                    type="text"
                    onKeyUp={keyupHandler}
                    onChange={inputHandler}
                    placeholder='email'
                    name='email'                    
                    ref={inputRefs[3]}/>
                <button
                    type='button'
                    onClick={addHandler}
                    ref={addButtonRef}
                    >추가</button>
            </div>
            <table css={S.table}>
                <thead>
                <tr>
                    <th css={S.ThAndTd}>index</th>
                    <th css={S.ThAndTd}>username</th>
                    <th css={S.ThAndTd}>password</th>
                    <th css={S.ThAndTd}>email</th>
                    <th css={S.ThAndTd}>update</th>
                    <th css={S.ThAndTd}>delete</th>
                </tr>
                </thead>
                <tbody>
                    {users.map(user => {

                        //userIndex.current += 1;

                        return(
                            <tr key={user.id}>
                                <td css={S.ThAndTd}>{user.id}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='username' name='username' ref={inputRefs[0]} defaultValue={user.username} />) : user.username}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='password' name='password' ref={inputRefs[1]} defaultValue={user.password} />) : user.password}</td>
                                <td css={S.ThAndTd}>{user.name}{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='name' name='name' ref={inputRefs[2]} defaultValue={user.name} />) : user.name}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='email' name='email' ref={inputRefs[3]} defaultValue={user.email} />) : user.email}</td>
                                <td css={S.ThAndTd}>
                                    {user.modifyFlag 
                                        ? (<button onClick={() => onSave(user.id)}>확인</button>)
                                        : (<button onClick={() => onModify(user.id)}>수정</button>) 
                                    }
                                </td>
                                <td css={S.ThAndTd}>
                                    <button onClick={() => onRemove(user.id)}>삭제</button>    
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;