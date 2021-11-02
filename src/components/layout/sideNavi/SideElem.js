import React from 'react';
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const StyledHr = styled.hr`
  width: 100%;
  border-top: 0.16vw solid #797979;
  
  ${props =>
          props.select &&
          css`
            border-color: #FFB663;
            background-color: #FFB663;
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

const SideElem = ({title, link, select}) => {

    return (
        <>
            <StyledHr select={select}/>
            <Link to={link}>
                <StyledMenu select={select}>
                    {title}
                </StyledMenu>
            </Link>
        </>

    );
};

export default SideElem;
