import React from 'react';
import ContainerPoomFormList from "../../../containers/mypage/myForm/ContainerPoomFormList";
import {ContentHeader} from "../../common/layout/StyledHeader";
import Introduction from "../../common/layout/Introduction";
import ContentTemplate from "../../common/layout/ContentTemplate";

const ManageSpaceForm = () => {
    return (
        <>
            <ContentHeader>품앗이 터 등록 폼 관리하기</ContentHeader>
            <Introduction>
                기존에 제작한 품앗이 터 등록 폼의 투표 현황 및 투표 미참여자 목록을 확인하여 관리 할 수 있다.
            </Introduction>

            <ContentTemplate>
                <ContainerPoomFormList/>
            </ContentTemplate>
        </>
    );
};

export default ManageSpaceForm;
