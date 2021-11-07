import React from 'react';
import DefaultSetting from "../components/common/DefaultSetting";
import SideNaviTemplate from "../components/layout/sideNavi/SideNaviTemplate";
import SideTitle from "../components/layout/sideNavi/SideTitle";
import SideElem from "../components/layout/sideNavi/SideElem";
import PageContentTemplate from "../components/common/layout/PageContentTemplate";
import MyInfoPage from "../components/routing-page/mypage/myInfo/MyInfoPage";
import ManageActivity from "../components/routing-page/mypage/ManageActivity";
import ManageSpaceForm from "../components/routing-page/mypage/ManageSpaceForm";

const MyPageSpaceForm = () => {
    return (
        <>
            <DefaultSetting>

                <SideNaviTemplate>
                    <SideTitle>마이페이지</SideTitle>
                    <SideElem title={"프로필 관리하기"} link={"/mypage"} />
                    <SideElem title={"자녀 & 품앗이 관리하기"} link={"/mypage/manageactivity"} />
                    <SideElem title={"품앗이 터 등록 폼 관리하기"} link={"/mypage/manageform"} select />
                </SideNaviTemplate>

                <PageContentTemplate>
                    <ManageSpaceForm />
                </PageContentTemplate>

            </DefaultSetting>
        </>
    );
};

export default MyPageSpaceForm;
