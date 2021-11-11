import React from 'react';
import SideNaviTemplate from "../../components/layout/sideNavi/SideNaviTemplate";
import SideTitle from "../../components/layout/sideNavi/SideTitle";
import SideElem from "../../components/layout/sideNavi/SideElem";
import PageContentTemplate from "../../components/common/layout/PageContentTemplate";
import DefaultSetting from "../../components/common/layout/DefaultSetting";
import MyInfoPage from "../../components/routing-page/mypage/MyInfoPage";
import {useSelector} from "react-redux";

const MyPage = () => {
    const {user} = useSelector(({user}) => ({
        user : user.userInfo.nick
    }));


    return (
        <>
            <DefaultSetting>

                <SideNaviTemplate>
                    <SideTitle>마이페이지</SideTitle>
                    <SideElem title={"프로필 관리"} link={"/mypage"} select />
                    <SideElem title={"자녀 & 품앗이 관리"} link={"/mypage/manageactivity"}  />
                    <SideElem title={"품앗이 터 등록 폼 관리"} link={"/mypage/manageform"} />
                    {
                        user === 'admin' && (
                            <SideElem title={'회원 관리'} link={'/mypage/managemember'} />
                        )
                    }

                </SideNaviTemplate>

                <PageContentTemplate>
                    <MyInfoPage/>
                </PageContentTemplate>

            </DefaultSetting>
        </>
    );
};

export default MyPage;
