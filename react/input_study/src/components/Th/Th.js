/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from './style'


function Th({ children }){
    return (
        <Th css={S.style}>
            {children}
        </Th>  
    );
} 

export default Th;