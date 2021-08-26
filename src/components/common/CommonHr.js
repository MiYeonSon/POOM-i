import React from 'react';
import styld from "styled-components";

const StyledHr = styld.hr`
    width: 100%;
    margin : 2vw 0vw;
    border: 1px solid #DEDEDE;
`;


const CommonHr = () => {
    return (
        <StyledHr />
    );
};

export default CommonHr;
