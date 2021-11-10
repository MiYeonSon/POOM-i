import styled from 'styled-components';

export const ContentHeader = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: 8vh;
  
  margin: ${props => props.margin};
  
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
  font-weight: 700;
  font-size: 1.9vw;
  color: #4E7093;
`;

export const ContentMiddleHeader = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: 5vh;
  display: flex;
  color: ${props => props.color || '#707070'};
  flex-wrap: wrap;
  align-items: center;
  font-size: 1.5vw;
  font-weight: 700;
  font-family: 'LotteMartDream';
`;

export const ContentSmallHeader = styled.div`
  box-sizing: border-box;
  width: 55vw;
  height: 3vh;
  margin: 1vw 0 0.3vw 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1.1vw;
  font-weight: 400;
`;