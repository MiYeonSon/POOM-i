import React from 'react';
import styled from "styled-components";

const StyledSideNaviTemplate = styled.div`
  box-sizing: border-box;
  margin: 0 1vw;
  width: 13vw;
  height: 100vh;
    
`;


const SideNaviTemplate = (props) => {
    return (
        <StyledSideNaviTemplate>{props.children}</StyledSideNaviTemplate>
    );
};

export default SideNaviTemplate;
