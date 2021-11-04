import React from 'react';
import styled from "styled-components";

const StyledActionButton = styled.button`
  height: fit-content;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${props => props.color || 'gray'};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  background-color: ${props => props.backgroundColor};

  &:hover {
    background-color: ${props => props.hoverColor || 'rgba(255, 182, 99, 0.5)'};
    color: white;
  }

  & + & {
    margin-left: 0.5rem;
  }
`;

const ActionButton = ({backgroundColor, hoverColor, color, onClick, children}) => {
    return (
        <StyledActionButton
            backgroundColor={backgroundColor}
            hoverColor={hoverColor}
            color={color}
            type={'button'}
            onClick={onClick}
        >
            {children}
        </StyledActionButton>
    );
};

export default ActionButton;
