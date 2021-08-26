import React from 'react';
import styled, {css} from "styled-components";
const ProfileImage = (props) => {
    const StyledProfileImage = styled.img`
      box-sizing: border-box;
      width:100%;
      height:100%;
      object-fit:cover;
      border: 0.1vw solid #707070;
      border-radius: 100%;
      
      ${props => css`
        width: ${props.size}vw;
        height: ${props.size}vw;
      `}
    `;

    return (
        <StyledProfileImage size={props.size} imgSrc={props.imgSrc}></StyledProfileImage>
    );
};

export default ProfileImage;
