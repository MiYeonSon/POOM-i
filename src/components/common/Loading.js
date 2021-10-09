import React from 'react';
import styled from "styled-components";
import {BounceLoader} from "react-spinners";

const Loading = () => {

    const Flex = styled.div`
      box-sizing: border-box;
      display: flex;
      width: 100vw;
      height: 100vh;
      justify-content: center;
      align-items: center;
    `;

    const spinnerStyle = {
        display : 'block'
    };

    return (
        <Flex>
            <BounceLoader size={100} color={'#FFB663'} style={spinnerStyle}/>
        </Flex>
    );
};

export default Loading;
