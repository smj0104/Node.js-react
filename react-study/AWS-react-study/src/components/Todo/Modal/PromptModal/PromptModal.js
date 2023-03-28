/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import ModalButton from "../ModalButton/ModalButton";
import * as S from './style';

const PromptModal = (props) => {

    const modalRef = useRef();
    const [modalContent, setModalContent] = useState('');

    useEffect(
        () => {
            setModalContent(props.todo.content);

            const handler = (event) => {
                if(!modalRef.current.contains(event.target)){ //
                    props.setIsOpen(false);
                }
            }

            document.addEventListener('mousedown', handler);  //mousedown시 handler호출 객체가 만들어질때마다 쌓여서 비워줘야함
            return () => {
                document.removeEventListener('mousedown', handler);
            
            }
        },[]
    );  //컴포넌트가 생성될때,사라질때 사용


    const closeModal = () => {
        props.setIsOpen(false);
    }

    const contentChange = (event) => {
        setModalContent(event.target.value);
    }

    const onSubmitKeyup = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        props.updateTodo({
            id: props.todo.id,
            content: modalContent
        });
        closeModal();
    }

    return(
        <div css={S.modalContainer}>
            <div css={S.modalBox} ref={modalRef}>
                <header css={S.modalHeader}>
                    <h1 css={S.modalTitle}>{props.title}</h1>
                </header>
                <main css={S.modalMain}>
                    <input css={S.modalInput} type="text" onChange={contentChange} onKeyUp={onSubmitKeyup} defaultValue={props.todo.content}/>
                </main>
                <footer css={S.modalFooter}>
                    <ModalButton buttonCount={2} onClick={onSubmit}>확인</ModalButton>
                    <ModalButton buttonCount={2} onClick={closeModal} >취소</ModalButton>
                </footer>
            </div>
        </div>
    );
}

export default PromptModal;