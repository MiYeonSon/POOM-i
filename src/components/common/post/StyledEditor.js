import styled from "styled-components";

export const SmallTitle = styled.div`
  margin-bottom: 0.5vw;
  font-family: paybooc-Bold;
  font-size: 0.9vw;
`;

export const CategoryBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: ${props => props.padding || '0 0 1.5vw'};
`;

export const WriteActionButtonsBlock = styled.div`
  margin: 1vw;
  display: flex;
  justify-content: right;
`;