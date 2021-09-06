import React, {useEffect, useState} from 'react';
import axios from 'axios';

import SignUpBlock from "./SignUpBlock";
import ContentMiddleHeader from "../common/ContentMiddleHeader";
import InfoFormBlock from "./InfoFormBlock";
import InfoFormTemplate from "./InfoFormTemplate";

const SignUpStep2 = () => {
    const [phone, setPhone] = useState("");





    return (
        <SignUpBlock>
            <ContentMiddleHeader>본인 인증</ContentMiddleHeader>
            <InfoFormTemplate>
                <InfoFormBlock title={"휴대전화"} inputType={"text"} dataName={'phone_number'} roundButton={"인증번호 전송"} />
                <InfoFormBlock title={"인증번호"} inputType={"text"} roundButton={"인증 확인"}/>
            </InfoFormTemplate>
        </SignUpBlock>
    );
};

export default SignUpStep2;
