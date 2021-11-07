import React from 'react';
import CallingCard from "./CallingCard";
import ContentTemplate from "../../../common/layout/ContentTemplate";
import UserInfoTable from "./UserInfoTable";

const MyInfoPage = () => {
    return (
        <ContentTemplate>
            <CallingCard />
            <UserInfoTable />
        </ContentTemplate>
    );
};

export default MyInfoPage;
