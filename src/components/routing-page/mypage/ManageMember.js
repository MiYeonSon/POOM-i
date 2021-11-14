import React from 'react';
import {ContentHeader, ContentMiddleHeader} from "../../common/layout/StyledHeader";
import ContainerAcceptMemberInfo from "../../../containers/mypage/manage-member/ContainerAcceptMemberInfo";
import {ContentTemplate, Introduction} from "../../common/layout/StyledLayout";
import ContainerAcceptFormList from "../../../containers/mypage/manage-member/ContainerAcceptFormList";

const ManageMember = () => {
    return (
        <>
            <ContentHeader>회원 관리하기</ContentHeader>
            <Introduction>각종 인증 승인 처리를 할 수 있습니다.</Introduction>

            <ContentTemplate>
                <ContentMiddleHeader>[ 회원 가입 승인 대기 목록 ]</ContentMiddleHeader>
                <ContainerAcceptMemberInfo />

                <div style={{marginTop : '5vw'}}>
                    <ContentMiddleHeader>[ 품앗이 터 등록 폼 승인 대기 목록 ]</ContentMiddleHeader>
                    <ContainerAcceptFormList />
                </div>

            </ContentTemplate>

        </>
    );
};

export default ManageMember;
