import React from 'react';
import styled, {css} from "styled-components";

const SideElem = (props) => {
    const StyledHr = styled.hr`
      width: 100%;
      border-top: 0.16vw solid #797979;

      ${props =>
              props.select &&
              css`
                border-color : #FFB663;
              `};
    `;

    const StyledMenu = styled.button`
      box-sizing: border-box;
      margin: 0 0 1vw 0;
      width: 100%;
      height: fit-content;
      text-align: right;
      font-family: 'LotteMartDream';
      font-size: 1.1vw;
      font-weight: normal;
      color: #797979;
      background: none;
      outline: none;
      border: none;
      cursor: pointer;

      ${props =>
              props.select &&
              css`
                color: #FFB663;
              `};
    `;

    return (
        <>
            <StyledHr select={props.select}/>
            <StyledMenu select={props.select}>
                {props.title}
            </StyledMenu>
        </>

    );
};

export default SideElem;
