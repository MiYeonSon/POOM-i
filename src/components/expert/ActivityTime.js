import React from 'react';
import styled from "styled-components";

const ActivityTime = () => {
    const StyledActivityTime = styled.div`
      box-sizing: border-box;
      width: fit-content;
      margin: 1.2vw 0vw 0vw;
      height: fit-content;
      color: #565656;
      font-size: 0.9vw;
      font-weight: 400;
      background: linear-gradient(to top, #F1F1F1 50%, transparent 50%);
      
    `;

    return (
        <StyledActivityTime>
            활동 시간: 2021.08.26 09:00 - 2021.08.26 12:00
        </StyledActivityTime>
    );
};

export default ActivityTime;
