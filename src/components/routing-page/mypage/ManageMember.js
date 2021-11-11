import React from 'react';
import {ContentHeader} from "../../common/layout/StyledHeader";
import Introduction from "../../common/layout/Introduction";
import ContentTemplate from "../../common/layout/ContentTemplate";

const ManageMember = () => {
    return (
        <>
            <ContentHeader>회원 관리하기</ContentHeader>
            <Introduction>각종 인증 승인 처리를 할 수 있습니다.</Introduction>

            <ContentTemplate>
                test
            </ContentTemplate>

        </>
    );
};

export default ManageMember;
