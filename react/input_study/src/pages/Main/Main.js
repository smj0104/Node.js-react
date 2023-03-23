/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from "react";
import Input from "../../components/Input/Input";
import Th from "../../components/Th/Th";
import Td from "../../components/Td/Td";
import * as S from "./style";

function Main() { //jsx는 class가 아닌 classname
    const [ userList, setUserList ] = useState([]);
    const usernameRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    
    const handlerClick = () =>{
        const user = {
            number: userList.length == 0 ? 1 : userList[userList.length - 1].number + 1,
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            name: nameRef.current.value,
            email: emailRef.current.value
        }

        setUserList([...userList, user]);
    }


    return(
    <div css={S.containerStyle}>
        <header css={S.mainHeaderStyle}>
            <h1>사용자 정보 등록</h1>
        </header>   
        <main css = {S.mainContainerStyle}>
            <div css={S.userInputContainerStyle}>
                <input type={"text"} placeholder={"username"} inputRef={usernameRef} />
                <input type={"password"}  placeholder={"password"} inputRef={passwordRef}/>
                <input type={"text"}  placeholder={"name"} inputRef={nameRef}/>
                <input type={"email"}  placeholder={"email"} inputRef={emailRef}/>
                <button type={"button"} onClick={handlerClick} >추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <Th>번호</Th>
                        <Th>username</Th>
                        <Th>password</Th>
                        <Th>name</Th>
                        <Th>email</Th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(user => {  //userlist가 바뀔때 마다 재실행(innerHTML과 동일)
                        return (
                            <tr>
                                <Td>{user.username}</Td>
                                <Td>{user.password}</Td>
                                <Td>{user.name}</Td>
                                <Td>{user.email}</Td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </main>
    </div>
    );
}

export default Main;