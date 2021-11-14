import styled from 'styled-components';

export const FileLink = styled.span`
  box-sizing: border-box;
  width: fit-content;
  margin-left: ${props => props.marginLeft || '0.5vw'};
  font-weight: 400;
  font-size: 0.8vw;
  color: #4E7093;
  cursor: pointer;
`;