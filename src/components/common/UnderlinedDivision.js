import React from 'react';
import styled from "styled-components";

const StyledActivityTime = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  margin: ${props => props.margin || '0.3vw 0 0'};
  color: #565656;
  font-size: 1.1vw;
  font-weight: 400;
  background: linear-gradient(to top, #FFB6635E 55%, transparent 50%);
`;

const UnderlinedDivision = ({margin, children}) => {

    return (
        <StyledActivityTime margin={margin}>
            {children}
        </StyledActivityTime>
    );
};

export default UnderlinedDivision;
