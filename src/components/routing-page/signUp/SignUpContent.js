import React, {useEffect, useMemo, useState} from 'react';
import SignUpStep1 from "./SignUpStep1";
import SignUpStep2 from "./SignUpStep2";
import SignUpStep3 from "./step03/SignUpStep3";
import SignUpStep4 from "./SignUpStep4";

const SignUpContent = ({num}) => {
    const stepArr = [SignUpStep1, SignUpStep2, SignUpStep3, SignUpStep4]

    useEffect(() => {
        console.log(num);
    }, [num]);

    return (
        <div>
            {num}
        </div>
    );
};

export default SignUpContent;
