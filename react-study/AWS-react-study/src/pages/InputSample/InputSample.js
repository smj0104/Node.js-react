import React, { useRef, useState } from 'react';

const InputSample = () => {
    const userInfo = {
        username: '',
        password: ''
    }

    const [userInput, setUserInput] = useState(userInfo); //useState 파악 (useState같은 hook은 항상 위에 위치할것)
    const [userInfoText, setUserInfoText] = useState(userInfo);

    const { username, password } = userInfoText;

    const passwordRef = useRef();

    const handlerChange = (e) => {
        const { name, value } = e.target;  //어떠한 이벤트가 일어나면 이벤트 객체가 파라미터로 전달됨(매개변수로 들어옴)
        setUserInput({...userInput, [name]: value}); //기존의 값을 덮어씀, 중괄호로 감싸기
    }

    const nextFocus = (e) => {
        if(e.keyCode === 13) {   // === 자료형이랑 값까지 일치해야 같음
            passwordRef.current.focus();
        }
    }

    const submitHandler = (e) => {
        if(e.keyCode === 13) {
            setUserInfoText({...userInput  //userInput에 들어있는
            });
        }
    }

    return (
        <div>
            <input
                type="text"
                onChange={handlerChange}
                onKeyUp={nextFocus}
                name="username" 
            />
            <input
                type="text"
                onChange={handlerChange}
                onKeyUp={submitHandler}
                name="password"
                ref={passwordRef}
            />
            <div>username: {username}</div>
            <div>password: {password}</div>
        </div>
    );
};
export default InputSample;