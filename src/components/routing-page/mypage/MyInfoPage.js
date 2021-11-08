import React from 'react';
import CallingCard from "./myInfo/CallingCard";
import ContentTemplate from "../../common/layout/ContentTemplate";
import UserInfoTable from "./myInfo/UserInfoTable";

const MyInfoPage = () => {
    return (
        <ContentTemplate>
            <CallingCard />
            <UserInfoTable />
        </ContentTemplate>
    );
};

export default MyInfoPage;
