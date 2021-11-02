import React from 'react';
import styled from "styled-components";

const InfoFormTemplate = ({children}) => {
    const StyledInfoFormTemplate = styled.div`
      box-sizing: border-box;
      width: 55vw;
      height: fit-content;
      margin: 1vw 0;
      padding: 0;
    `;

    return (
        <StyledInfoFormTemplate>{children}</StyledInfoFormTemplate>

    );
};

export default InfoFormTemplate;
