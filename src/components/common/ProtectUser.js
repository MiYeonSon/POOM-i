import React from 'react';
import styled from 'styled-components';

const ProtectUserTemplate = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(222, 222, 222, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProtectUser = () => {

    return (
        <ProtectUserTemplate>
            test
        </ProtectUserTemplate>
    );
};

export default ProtectUser;
