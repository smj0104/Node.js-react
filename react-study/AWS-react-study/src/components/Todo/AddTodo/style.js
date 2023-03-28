import { css } from "@emotion/react";


 export const TodoAddition = css`
    position: sticky;
    top: 0px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border-radius: 7px;
    padding: 10px;
    width: 600px;
    height: 60px;

    background-color: #eee;
`; 

 export const AdditionInput = css`
    box-sizing: border-box;
    outline: none;
    border: none;
    padding: 0px 50px 0px 10px;
    border-bottom: 3px solid white;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;  //기존폰트 사이즈에서 120%
    background-color: #eee;
`;

 export const TodoAddButton = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    width: 35px;
    height: 35px;
    background-color: #ffffff00;
    transition: all 1s ease;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
        transform: translateY(-50%) rotate(180deg) scale(1.5);
    }
`;