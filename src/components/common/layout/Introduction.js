import React from 'react';
import styled from 'styled-components';

const Introduction = (props) => {
    const StyledIntroduction = styled.div`
      box-sizing: border-box;
      width: 100%;
      height: fit-content;
      color : #707070;
      font-size: 1.1vw;
      font-weight: 300;
      line-height: 1.5vw;
    `;

    return (
        <StyledIntroduction>{props.children}</StyledIntroduction>
    );
};

export default Introduction;
