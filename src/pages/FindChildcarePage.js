import React from 'react';

import SideNaviTemplate from "../components/sideNavi/SideNaviTemplate";
import SideTitle from "../components/sideNavi/SideTitle";
import SideElem from "../components/sideNavi/SideElem";
import ContentTemplate from "../components/childcare/ContentTemplate";
import ShortTermPage from "../components/content/ShortTermPage";
import DefaultSetting from "../components/common/DefaultSetting";

const FindChildcarePage = () => {
    return (
        <>
            <DefaultSetting>
                <SideNaviTemplate>
                    <SideTitle>품앗이 찾기</SideTitle>
                    <SideElem title={"품앗이 꾼 찾기"} link={"/childcare"} select />
                    <SideElem title={"품앗이 반 찾기"} link={"/class"} />
                </SideNaviTemplate>

                <ContentTemplate>

                    <ShortTermPage/>

                </ContentTemplate>
            </DefaultSetting>
        </>
    );
};

export default FindChildcarePage;
