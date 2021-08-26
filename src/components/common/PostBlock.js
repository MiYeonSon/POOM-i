import React from 'react';
import styled, {css} from 'styled-components';
import Volunteer from './assets/volunteer.png';

const PostBlock = (props) => {
    const StyledWritingBlock = styled.div`
      box-sizing: border-box;
      margin: 1vw 0;
      padding: 2vw 3vw;
      width: 100%;
      height: fit-content;
      border: 0.1vw solid #AAAAAA;
      border-radius: 0.2vw;
      box-shadow: 0.1vw 0.1vw 0.1vw #DEDEDE;

      ${props =>
              props.volunteer &&
              css`
                background-image: url(${Volunteer});
                background-size: 10vw;
                background-repeat: no-repeat;
                background-position: right bottom;
                
              `};

      ${props =>
              props.postInput &&
              css`
                display: flex;
                padding: 1vw;
                justify-content: space-evenly;
                align-items: center;
              `};

      ${props =>
              props.longTerm &&
              css`
                background-image: url(${Volunteer});
                background-size: 10vw;
                background-repeat: no-repeat;
                background-position: right bottom;
                
              `};

    }

    `;
    return (
        <StyledWritingBlock {...props}>{props.children}</StyledWritingBlock>
    );
};

export default PostBlock;
