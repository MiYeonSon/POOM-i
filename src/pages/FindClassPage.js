import React from 'react';
import DefaultSetting from "../components/common/DefaultSetting";
import SideNaviTemplate from "../components/layout/sideNavi/SideNaviTemplate";
import SideTitle from "../components/layout/sideNavi/SideTitle";
import SideElem from "../components/layout/sideNavi/SideElem";
import ContentTemplate from "../components/common/ContentTemplate";
import ClassPage from "../components/routing-page/poom-class/ClassPage";

const FindClassPage = () => {
    return (
        <>
            <DefaultSetting>

                <SideNaviTemplate>
                    <SideTitle>품앗이 찾기</SideTitle>
                    <SideElem title={"품앗이 꾼 찾기"} link={"/childcare"}/>
                    <SideElem title={"품앗이 반 찾기"} link={"/class"} select/>
                </SideNaviTemplate>
                <ContentTemplate>

                    <ClassPage/>

                </ContentTemplate>



            </DefaultSetting>
        </>
    );
};

export default FindClassPage;
