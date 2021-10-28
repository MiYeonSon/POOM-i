import React from 'react';
import styled from "styled-components";

const ActivityTime = ({children}) => {
    const StyledActivityTime = styled.div`
      box-sizing: border-box;
      width: fit-content;
      height: fit-content;
      margin: 0.3vw 0 0;
      color: #565656;
      font-size: 0.8vw;
      font-weight: 400;
      background: linear-gradient(to top, #F1F1F1 50%, transparent 50%);
    `;

    return (
        <StyledActivityTime>
            {children}
        </StyledActivityTime>
    );
};

export default ActivityTime;
