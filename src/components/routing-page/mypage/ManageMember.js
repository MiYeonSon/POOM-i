import React from 'react';
import {ContentHeader} from "../../common/layout/StyledHeader";
import ContainerApplyMemberInfo from "../../../containers/mypage/manage-member/ContainerApplyMemberInfo";
import {ContentTemplate, Introduction} from "../../common/layout/StyledLayout";

const ManageMember = () => {
    return (
        <>
            <ContentHeader>회원 관리하기</ContentHeader>
            <Introduction>각종 인증 승인 처리를 할 수 있습니다.</Introduction>

            <ContentTemplate>
                <ContainerApplyMemberInfo />
            </ContentTemplate>

        </>
    );
};

export default ManageMember;
