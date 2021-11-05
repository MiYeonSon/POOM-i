import React from 'react';
import styled, {css} from 'styled-components';

const StyledWriterScore = styled.div`
  height: fit-content;
  margin: ${props => props.margin || '0.5vw 0 0'};
  ${props => css`
        width: ${props.width};
        font-weight: ${props.fontWeight};
        font-size: ${props.fontSize};
      `}
  
  border : 1px solid red;
`;

const WriterScore = ({score, margin, width, fontWeight, fontSize}) => {
    const getScore = () => {
        let result = '';
        for (let i = 0; i < score; i++) {
            result += '❤';
        }
        return result;
    }
    return (
        <StyledWriterScore margin={margin} width={width} fontWeight={fontWeight} fontSize={fontSize}>
            품앗이 점수 : {getScore()}
        </StyledWriterScore>
    );
};

export default WriterScore;
