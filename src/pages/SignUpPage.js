import React, {useState} from 'react';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ContentHeader from "../components/common/ContentHeader";

import SignUpProcess from "../components/signUp/SignUpProcess";
import SignUpStep1 from "../components/signUp/SignUpStep1";
import SignUpStep2 from "../components/signUp/SignUpStep2";
import SignUpStep3 from "../components/signUp/SignUpStep3";
import SignUpStep4 from "../components/signUp/SignUpStep4";
import SignUpTemplate from "../components/signUp/SignUpTemplate";
import PageButtonBlock from "../components/signUp/PageButtonBlock";
import PageButton from "../components/signUp/PageButton";
import CommonHr from "../components/common/CommonHr";

const SignUpPage = () => {
    const stepArr = [null, SignUpStep1, SignUpStep2, SignUpStep3, SignUpStep4];
    const [step, setStep] = useState(stepArr[1]);
    const [nextStep, setNextStep] = useState(2);
    const [prevStep, setPrevStep] = useState(0);

    const goToPrev = () => {
        setStep(stepArr[prevStep]);
        setPrevStep(prevStep - 1);
        setNextStep(nextStep - 1);
    }

    const goToNext = async () => {
        setStep(stepArr[nextStep]);
        setPrevStep(prevStep + 1);
        setNextStep(nextStep + 1);
    }

    return (
        <div className={"SignUp"}>
            <Header />

            <SignUpTemplate>
                <ContentHeader>회원가입</ContentHeader>
                <SignUpProcess/>
                <CommonHr/>
                {step}

                <PageButtonBlock>
                    <PageButton onClick={prevStep !== 0 ?  goToPrev : null}>이전</PageButton>
                    <PageButton onClick={nextStep !== 5 ? goToNext : null} highlight>다음</PageButton>
                </PageButtonBlock>

            </SignUpTemplate>

            <Footer/>
        </div>
    );
};

export default SignUpPage;