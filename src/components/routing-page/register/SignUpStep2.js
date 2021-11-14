import React from 'react';

import SignUpBlock from "./SignUpBlock";
import InfoFormTemplate from "./InfoFormTemplate";
import {ContentMiddleHeader} from "../../common/layout/StyledHeader";
import StyledTableRow from "../../common/StyledTableRow";
import styled, {css} from "styled-components";
import RectButton from "../../common/RectButton";

const StyleInput = styled.input`
  box-sizing: border-box;
  display: inline-block;
  width: ${props => props.width || '20vw'};
  height: 3.5vh;
  margin: 0 0.5vw;
  padding: 0;
  border: 0.01vw solid #DEDEDE;

  ${props =>
    props.inputType === "none" &&
    css`
            display: none;
          `};

  ${props =>
    props.inputType === "radio" &&
    css`
            width: 100vw;
            height: 10vw;
          `};
`;


const SignUpStep2 = ({form, onChange, buttonClick}) => {

    return (
        <SignUpBlock>
            <ContentMiddleHeader>본인 인증</ContentMiddleHeader>
            <InfoFormTemplate>
                <form>
                    <StyledTableRow header={'휴대 전화'} headerBold={true}>
                        <StyleInput type={'text'} />

                        <RectButton color={'#707070'}>인증 번호 요청</RectButton>
                    </StyledTableRow>

                    <StyledTableRow header={'인증 번호'} headerBold={true}>
                        <StyleInput type={'text'} />
                    </StyledTableRow>
                </form>
            </InfoFormTemplate>
        </SignUpBlock>
    );
};

export default SignUpStep2;
