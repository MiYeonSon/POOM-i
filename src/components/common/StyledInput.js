import styled from 'styled-components';
import InputTri from './assets/InputTri.png';

export const StyledSelect = styled.select`
  box-sizing: border-box;
  width: 40%;
  padding: 0.2vw 0.4vw;
  background: #F3F3F3 url(${InputTri}) no-repeat 95% 50%;
  background-size: 0.6vw;
  font-family: paybooc-Medium;
  font-size: 0.8vw;
  border: none;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  margin :  0.1vw;
  padding: 0.2vw 0.4vw;
  font-family: paybooc-Medium;
  font-size: 0.7vw;
  background: #F3F3F3;
  border: none;
  

  
  input[type="date"] {
    color : red;
  }

`;
