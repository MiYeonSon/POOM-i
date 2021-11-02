import React from 'react';
import ContentHeader from "../../common/styledHeader/ContentHeader";
import Introduction from "../../common/Introduction";

const RegisterPlaceStep1 = () => {
    return (
        <>
            <ContentHeader>품앗이 터 등록하기_Step 01</ContentHeader>
            <Introduction>
                지도와 현재 거주중인 건물을 확인하고 거주 사실을 인증합니다.
            </Introduction>

            <div>
                <p>1-1</p>
                <p>지도 상의 주소와 현재 거주중인 주소지가 맞는지 확인합니다.
                    만약 다른 경우, 마이페이지에서 거주지 변경 및 인증해주세요.
                    (이 경우, 관리자의 거주지 인증 승인 후에 품앗이 터 폼을 만들 수 있습니다.)
                </p>
            </div>

        </>
    );
};

export default RegisterPlaceStep1;
