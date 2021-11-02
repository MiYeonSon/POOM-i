import React, {useEffect, useMemo, useState} from 'react';

import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import ContentHeader from "../components/common/styledHeader/ContentHeader";

import SignUpProcess from "../components/routing-page/signUp/SignUpProcess";

import SignUpTemplate from "../components/routing-page/signUp/SignUpTemplate";
import PageButtonBlock from "../components/routing-page/signUp/PageButtonBlock";
import PageButton from "../components/routing-page/signUp/PageButton";
import CommonHr from "../components/common/CommonHr";
import SignUpStep1 from "../components/routing-page/signUp/SignUpStep1";
import SignUpStep2 from "../components/routing-page/signUp/SignUpStep2";
import SignUpStep3 from "../components/routing-page/signUp/step03/SignUpStep3";
import SignUpStep4 from "../components/routing-page/signUp/SignUpStep4";

const SignUpPage = () => {
    const [num, setNum] = useState(0);
    const stepArr = [<SignUpStep1 />, <SignUpStep2 />, <SignUpStep3 />, <SignUpStep4 />]

    return (
        <div className={"SignUp"}>
            <Header/>

            <SignUpTemplate>
                <ContentHeader>회원가입</ContentHeader>
                <SignUpProcess/>
                <CommonHr/>
                {/*
                                {stepArr[num]}

                */}
                <SignUpStep3 />

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