import styled from "styled-components";

export const PostContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  font-size: 1vw;
  font-weight: lighter;
`;

export const PostCreateDate = styled.div`
  box-sizing: border-box;
  margin: ${props => props.margin || '1vw 0'};
  color: #AAAAAA;
  font-weight: lighter;
  text-align: right;
  font-size: 0.8vw;
`;
