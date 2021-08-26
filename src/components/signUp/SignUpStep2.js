import React from 'react';
import SignUpBlock from "./SignUpBlock";
import ContentMiddleHeader from "../common/ContentMiddleHeader";
import InfoFormBlock from "./InfoFormBlock";
import InfoFormTemplate from "./InfoFormTemplate";

const SignUpStep2 = () => {
    return (
        <SignUpBlock>
            <ContentMiddleHeader>본인 인증</ContentMiddleHeader>
            <InfoFormTemplate>
                <InfoFormBlock title={"이름"} inputType={"text"} roundButton={"none"}/>
                <InfoFormBlock title={"휴대전화"} inputType={"password"} roundButton={"인증번호 전송"} />
                <InfoFormBlock title={"인증번호"} inputType={"text"} roundButton={"인증번호 재전송"}/>
            </InfoFormTemplate>
        </SignUpBlock>
    );
};

export default SignUpStep2;
