import React from 'react';
import DefaultSetting from "../../components/common/layout/DefaultSetting";
import SideNaviTemplate from "../../components/layout/sideNavi/SideNaviTemplate";
import SideTitle from "../../components/layout/sideNavi/SideTitle";
import SideElem from "../../components/layout/sideNavi/SideElem";
import PageContentTemplate from "../../components/common/layout/PageContentTemplate";
import ManageSpaceForm from "../../components/routing-page/mypage/ManageSpaceForm";
import {ContentHeader, ContentMiddleHeader} from "../../components/common/layout/StyledHeader";
import Introduction from "../../components/common/layout/Introduction";
import {useSelector} from "react-redux";

const MyPageSpaceForm = () => {
    const {user} = useSelector(({user}) => ({
        user: user.userInfo.nick
    }));

    return (
        <>
            <DefaultSetting>

                <SideNaviTemplate>
                    <SideTitle>마이페이지</SideTitle>
                    <SideElem title={"프로필 관리"} link={"/mypage"}/>
                    <SideElem title={"자녀 & 품앗이 관리"} link={"/mypage/manageactivity"}/>
                    <SideElem title={"품앗이 터 등록 폼 관리"} link={"/mypage/manageform"} select/>
                    {
                        user === 'admin' && (
                            <SideElem title={'회원 관리'} link={'/mypage/managemember'}/>
                        )
                    }
                </SideNaviTemplate>

                <PageContentTemplate>
                    <ContentHeader>품앗이 터 등록 폼 관리하기</ContentHeader>
                    <Introduction>
                        기존에 제작한 품앗이 터 등록 폼의 투표 현황 및 투표 미참여자 목록을 확인하여 관리 할 수 있다.
                    </Introduction>

                    <div style={{margin: '1.5vw 0'}}>
                        <ContentMiddleHeader>제작한 품앗이 터 등록 폼 목록</ContentMiddleHeader>
                        <ManageSpaceForm/>
                    </div>
                </PageContentTemplate>

            </DefaultSetting>
        </>
    );
};

export default MyPageSpaceForm;
