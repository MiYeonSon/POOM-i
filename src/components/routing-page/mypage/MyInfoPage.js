import React from 'react';
import CallingCard from "./myInfo/CallingCard";
import ContentTemplate from "../../common/layout/ContentTemplate";
import UserInfoTable from "./myInfo/UserInfoTable";
import ContainerMyInfo from "../../../containers/mypage/myInfo/ContainerMyInfo";

const MyInfoPage = () => {
    return (
        <ContentTemplate>
            <ContainerMyInfo />
        </ContentTemplate>
    );
};

export default MyInfoPage;
