/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from './style'


function Td({ children }){
    return (
        <Td css={S.style}>
            { children }        
        </Td>  
    );
} 

export default Td;