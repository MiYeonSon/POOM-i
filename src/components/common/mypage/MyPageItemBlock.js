import React, {useState} from 'react';
import styled from "styled-components";
import {BsTriangleFill} from "react-icons/bs";

const MyPageItemTemplate = styled.div`
  box-sizing: border-box;
  padding: 2vw 3vw;
  width: 100%;
  display: flex;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #AAAAAA;
  border-radius: 14px;

  .nonRotate {
    transform: rotate(0);
  }

  .rotate {
    transform: rotate(180deg);
  }
`;

const MyPageItemBlock = ({children}) => {
    const [click, setClick] = useState(false);

    return (
        <MyPageItemTemplate onClick={() => setClick(!click)}>
            <BsTriangleFill className={click ? 'rotate' : 'nonRotate'} color={'#AAAAAA'} size={'1vw'}
                            style={{margin: '1vw 2vw 0 0'}}/>

            <div style={{width: '100%'}}>
                {children}
            </div>
        </MyPageItemTemplate>
    );
};

export default MyPageItemBlock;
