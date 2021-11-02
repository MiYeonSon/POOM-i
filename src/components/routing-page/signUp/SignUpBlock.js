import React from 'react';
import styled from 'styled-components';

const StyledSignUpBlock = styled.div`
  box-sizing: border-box;
  width: 55vw;
  height: fit-content;
  margin: 0vw auto;

`;

const SignUpBlock = (props) => {
    return (
        <StyledSignUpBlock>
            {props.children}
        </StyledSignUpBlock>
    );
};

export default SignUpBlock;
