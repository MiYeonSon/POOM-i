import React, {useEffect, useState} from 'react';
import axios from 'axios';

import SignUpBlock from "./SignUpBlock";
import ContentMiddleHeader from "../common/styledHeader/ContentMiddleHeader";
import InfoFormBlock from "./InfoFormBlock";
import InfoFormTemplate from "./InfoFormTemplate";
import SignUpStep2Form from "../../containers/signUp/SignUpStep2Form";

const SignUpStep2Test = ({form, onChange, onSubmit}) => {
    // const [phone, setPhone] = useState("");


    return (
        <SignUpBlock>
            <ContentMiddleHeader>본인 인증</ContentMiddleHeader>
            <InfoFormTemplate>
                <div>
                    <InfoFormBlock
                        name={"phone"}
                        onChange={onChange}
                        value={form.phone}
                        title={"휴대전화"}
                        inputType={"text"}
                        dataName={'phone_number'}
                        roundButton={"인증번호 전송"}
                    />
                    <InfoFormBlock
                        autoComplete={'certifiedNum'}
                        name={"certifiedNum"}
                        onChange={onChange}
                        value={form.certifiedNum}
                        title={"인증번호"}
                        inputType={"text"}
                        roundButton={"인증 확인"}
                    />
                </div>
            </InfoFormTemplate>
        </SignUpBlock>
    );
};

export default SignUpStep2Test;
