import React from 'react';
import styled from "styled-components";

const StyledActionButton = styled.button`
  height: fit-content;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: gray;
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;


  &:hover {
    background: rgba(255, 182, 99, 0.5);
    color: white;
  }

  & + & {
    margin-left: 0.5rem;
  }
`;

const ActionButton = ({onClick, children}) => {
    return (
        <ActionButton onClick={onClick}>{children}</ActionButton>
    );
};

export default ActionButton;
