import React from 'react';
import styled, {css} from 'styled-components';
import Volunteer from '../assets/volunteer.png';

const StyledWritingBlock = styled.div`
  box-sizing: border-box;
  margin: 2vw 0;
  padding: 2vw 3vw;
  width: 100%;
  height: fit-content;
  border: 0.1vw solid #AAAAAA;
  border-radius: 0.2vw;
  box-shadow: 0.1vw 0.1vw 0.1vw #DEDEDE;

  ${props =>
          props.type === "VOLUNTEER" &&
          css`
            background-image: url(${Volunteer});
            background-size: 10vw;
            background-repeat: no-repeat;
            background-position: right bottom;
            
          `};

  ${props =>
          props.type === "postInput" &&
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


const PostItemTemplate = ({type, children}) => {
    return (
        <StyledWritingBlock type={type}>{children}</StyledWritingBlock>
    );
};

export default PostItemTemplate;
