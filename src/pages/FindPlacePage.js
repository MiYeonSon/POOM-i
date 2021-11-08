/*
 * 품앗이 터 찾기 페이지
 */
import React from 'react';
import DefaultSetting from "../components/common/DefaultSetting";
import SideTitle from "../components/layout/sideNavi/SideTitle";
import SideElem from "../components/layout/sideNavi/SideElem";
import SideNaviTemplate from "../components/layout/sideNavi/SideNaviTemplate";
import PageContentTemplate from "../components/common/layout/PageContentTemplate";
import SpaceListPage from "../components/routing-page/playground/list/SpaceListPage";

const FindPlacePage = () => {
    return (
        <>
            <DefaultSetting>

                <SideNaviTemplate>
                    <SideTitle>품앗이 터 찾기</SideTitle>
                    <SideElem title={"우리 동네 품앗이 터 찾기"} link={"/playground"} select />
                    <SideElem title={"품앗이 터 등록하기"} link={"/playground/register"} />
                </SideNaviTemplate>

                <PageContentTemplate>
                    <SpaceListPage />
                </PageContentTemplate>

            </DefaultSetting>
        </>
    );
};

export default FindPlacePage;
