import React from 'react';
import styled, {css} from 'styled-components';

const StyledWriterScore = styled.div`
  height: fit-content;
  margin: 0.5vw 0 0;
  ${props => css`
        width: ${props.width};
        font-weight: ${props.fontWeight};
        font-size: ${props.fontSize};
      `}
`;

const WriterScore = ({score, width, fontWeight, fontSize}) => {
    const getScore = () => {
        let result = '';
        for (let i = 0; i < score; i++) {
            result += '❤';
        }
        return result;
    }
    return (
        <StyledWriterScore width={width} fontWeight={fontWeight} fontSize={fontSize}>
            품앗이 점수 : {getScore()}
        </StyledWriterScore>
    );
};

export default WriterScore;
