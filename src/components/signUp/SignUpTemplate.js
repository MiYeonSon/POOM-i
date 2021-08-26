import React from 'react';
import styled from "styled-components";

const StyledSignUpTemplate = styled.div`
  box-sizing: border-box;
  width: 55vw;
  height: fit-content;
  margin: 4vw  auto;
  font-weight: 300;
  color: #707070;
`;

const SignUpTemplate = (props) => {
    return (
        <StyledSignUpTemplate>{props.children}</StyledSignUpTemplate>
    );
};

export default SignUpTemplate;
