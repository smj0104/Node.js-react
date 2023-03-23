/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from './style'


function Input({ type, placeholder, inputRef }){
    return (
        <Input
         css={S.style}
         type={type}
         placeholder={placeholder} 
         ref={inputRef}
        />
        
    );

} 

export default Input;