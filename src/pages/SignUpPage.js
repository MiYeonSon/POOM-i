import React, {useEffect, useMemo, useState} from 'react';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ContentHeader from "../components/common/ContentHeader";

import SignUpProcess from "../components/signUp/SignUpProcess";

import SignUpTemplate from "../components/signUp/SignUpTemplate";
import PageButtonBlock from "../components/signUp/PageButtonBlock";
import PageButton from "../components/signUp/PageButton";
import CommonHr from "../components/common/CommonHr";
import SignUpContent from "../components/signUp/SignUpContent";
import SignUpStep1 from "../components/signUp/SignUpStep1";
import SignUpStep2 from "../components/signUp/SignUpStep2";
import SignUpStep3 from "../components/signUp/SignUpStep3";
import SignUpStep4 from "../components/signUp/SignUpStep4";

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

                <SignUpStep2 />

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