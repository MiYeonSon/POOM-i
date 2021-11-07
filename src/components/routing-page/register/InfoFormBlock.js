import React from 'react';
import styled from "styled-components";
import InfoHr from "./InfoHr";

const StyledInfoFormBlock = styled.div`
  box-sizing: border-box;
  width: 55vw;
  height: ${props => props.height || '5vw'};
  margin: 0.5vw 0;
  display: flex;
  align-items: center;
  
`;

const InfoTitle = styled.div`
  box-sizing: border-box;
  width: 12vw;
  height: inherit;
  margin: 0;
  text-align: center;
  font-size: 1vw;
  font-weight: 400;
  background: rgba(255, 182, 99, 0.3);
`;

const InputBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 43vw;
  height: inherit;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const InfoFormBlock = ({children, title}) => {

    return (
        <>
            <StyledInfoFormBlock>
                <InfoTitle>{title}</InfoTitle>
                <InputBlock>
                    <InfoHr/>
                    {children}
                    <InfoHr/>
                </InputBlock>
            </StyledInfoFormBlock>
        </>
    );
};

export default InfoFormBlock;
