import React from 'react';
import styled from "styled-components";

const StyledContentTemplate = styled.div`
  box-sizing: border-box;
  width: 60%;
  height: fit-content;
  margin: 0 auto;
`;

const PageContentTemplate = (props) => {

    return (
        <StyledContentTemplate>{props.children}</StyledContentTemplate>
    );
};

export default PageContentTemplate;
