import React from 'react';

import SideNaviTemplate from "../components/layout/sideNavi/SideNaviTemplate";
import SideTitle from "../components/layout/sideNavi/SideTitle";
import SideElem from "../components/layout/sideNavi/SideElem";
import ContentTemplate from "../components/common/ContentTemplate";
import ChildcarePage from "../components/common/ChildcarePage";
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

                    <ChildcarePage/>

                </ContentTemplate>
            </DefaultSetting>
        </>
    );
};

export default FindChildcarePage;
