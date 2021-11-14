import React, {useState} from 'react';

import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";

import SignUpProcess from "../../components/routing-page/register/SignUpProcess";

import SignUpTemplate from "../../components/routing-page/register/SignUpTemplate";
import PageButtonBlock from "../../components/routing-page/register/PageButtonBlock";
import PageButton from "../../components/routing-page/register/PageButton";
import SignUpStep1 from "../../components/routing-page/register/SignUpStep1";
import SignUpStep2 from "../../components/routing-page/register/SignUpStep2";
import SignUpStep3 from "../../components/routing-page/register/step03/SignUpStep3";
import SignUpStep4 from "../../components/routing-page/register/SignUpStep4";
import {ContentHeader} from "../../components/common/layout/StyledHeader";
import {CommonHr} from "../../components/common/styling/StyledTag";

const SignUpPage = () => {
    const [num, setNum] = useState(0);
    const stepArr = [<SignUpStep1 />, <SignUpStep2 />, <SignUpStep3 move={() => setNum(3)} />, <SignUpStep4 />]


    return (
        <div className={"SignUp"}>
            <Header/>

            <SignUpTemplate>
                <ContentHeader>회원가입</ContentHeader>
                <SignUpProcess/>
                <CommonHr/>
                                {stepArr[num]}


                <PageButtonBlock>
                    <PageButton onClick={num > -1 ? () => setNum(num - 1) : setNum(0)}>이전</PageButton>
                    <PageButton onClick={num < 4 ? () => setNum(num + 1) : setNum(3)} highlight>다음</PageButton>
                </PageButtonBlock>

            </SignUpTemplate>

            <Footer/>
        </div>
    );
};

export default SignUpPage;