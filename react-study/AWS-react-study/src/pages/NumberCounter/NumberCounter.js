/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 50px auto;
    border: 3px solid green;
    width: 400px;
    height: 400px;
`;

const BoxContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border: 3px solid green;
    width: 80%;
    height: 80%;
`;

const increaseFunction = (state) => {
    state.number++;
    return state;
}


const reducer = (currentState, action) => {
    if(currentState === undefined) {
        return {        //객체 리턴 한번도 만들어 진적이 없을때 값을 가져옴
            number:10  //값을 가져다 씀   
        }
    }
    const newState = {...currentState};  //switch문으로도 가능하다
    if(action.type === 'increase') {
        newState.number++;
    }else if(action.type === 'decrease') {
        newState.number--;
    }

    return newState;
}

const store = configureStore({reducer});

const Box = ({ title, children }) => {  //box 컴포넌트
    const count = useSelector(store => store.number);  //store에서 number를 꺼내라 이름만 store일뿐 매개변수
    return (
        <div css={BoxContainer}>
            <h1>{title}</h1>
            <h2>count: {count}</h2>
            {children}
        </div>
    );

}

const Buttons = () => {
    const dispatch = useDispatch();  //dispatch == 값을 변화시킬때 사용

    const increaseCount = () => {
        dispatch({ type: 'increase' });
    }

    const decreaseCount = () => {
        dispatch({ type: 'decrease' });
    }


    return (
        <>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
        </>
    )
}

const NumberCounter = () => {

    // const [count, setCount] = useState(0);  //0을 주지않으면 NaN

    // const increaseCount = () => {
    //     setCount(count + 1);
    // }

    // const decreaseCount = () => {
    //     setCount(count - 1);
    // }
    

    return (
        <div css={Container}>
            <Provider store={store}>
                <Box title={'box1'}>
                    <Box title={'box2'} >
                        <Box title={'box3'}>
                            <Box title={'box4'} >
                                <Buttons />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Provider>
        </div>
    );
};

export default NumberCounter;