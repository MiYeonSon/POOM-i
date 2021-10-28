import React from 'react';
import styled from 'styled-components';
import RectButton from "./RectButton";

const AskModalBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
 
  text-align: center; !important;
  font-size: 1vw;
  font-weight: lighter;
  
`;

const StyledContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  margin: 3vw 0;
  padding: 1vw 0;
`;


const AskModal = ({
                      description,
                      confirmText = '확인',
                      onConfirm,
                  }) => {

    return (
        <>
            <AskModalBlock>
                <StyledContent>
                    {description}
                </StyledContent>
                <RectButton style={{textAlign:"right"}} backgroundColor={"#FFB663"} onClick={onConfirm}>{confirmText}</RectButton>
            </AskModalBlock>

        </>

);
};

export default AskModal;
