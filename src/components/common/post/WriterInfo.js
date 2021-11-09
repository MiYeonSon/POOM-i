import styled, {css} from "styled-components";

export const UserInfoBlock = styled.div`
  width: 20%;
  height: fit-content;
  text-align: center;
`;

export const ProfileImage = styled.img`
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

export const StyledWriterId = styled.div`
  width: ${props => props.width || '100%'};
  height: fit-content;
  margin: 0.5vh 0;
  text-align: ${props => props.textAlign || 'center'};
  font-size: 0.8vw;
  color: #565656;
`;