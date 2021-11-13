import React from 'react';
import {ContentHeader} from "../../common/layout/StyledHeader";
import ContainerActivity from "../../../containers/mypage/myActivity/ContainerActivity";
import {ContentTemplate, Introduction} from "../../common/layout/StyledLayout";

const ManageActivity = () => {
    return (
        <>
            <ContentHeader>자녀 & 품앗이 관리하기</ContentHeader>
            <Introduction>진행중인 품앗이를 관리하고, 완료한 품앗이에 대한 평가를 진행해보아요!</Introduction>

            <ContentTemplate>
                <ContainerActivity />
            </ContentTemplate>
        </>
    );
};

export default ManageActivity;
