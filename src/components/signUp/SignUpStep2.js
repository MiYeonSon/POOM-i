import React from 'react';

import SignUpBlock from "./SignUpBlock";
import ContentMiddleHeader from "../common/styledHeader/ContentMiddleHeader";
import InfoFormBlock from "./InfoFormBlock";
import InfoFormTemplate from "./InfoFormTemplate";

const SignUpStep2 = ({form, onChange, buttonClick}) => {

    return (
        <SignUpBlock>
            <ContentMiddleHeader>본인 인증</ContentMiddleHeader>
            <InfoFormTemplate>
                <form>
                    <InfoFormBlock
                        name={"phone"}
                        onChange={onChange}
                        value={form.phone}
                        title={"휴대전화"}
                        inputType={"text"}
                        dataName={'phone_number'}
                        roundButton={"인증번호 전송"}
                        onClick={buttonClick}
                    />
                    <InfoFormBlock
                        autoComplete={'certifiedNum'}
                        name={"certifiedNum"}
                        onChange={onChange}
                        title={"인증번호"}
                        inputType={"text"}
                        roundButton={"인증 확인"}
                    />
                </form>
            </InfoFormTemplate>
        </SignUpBlock>
    );
};

export default SignUpStep2;
