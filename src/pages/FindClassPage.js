import React from 'react';
import DefaultSetting from "../components/common/layout/DefaultSetting";
import SideNaviTemplate from "../components/layout/sideNavi/SideNaviTemplate";
import SideTitle from "../components/layout/sideNavi/SideTitle";
import SideElem from "../components/layout/sideNavi/SideElem";
import PageContentTemplate from "../components/common/layout/PageContentTemplate";
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
                <PageContentTemplate>

                    <ClassPage/>

                </PageContentTemplate>



            </DefaultSetting>
        </>
    );
};

export default FindClassPage;
