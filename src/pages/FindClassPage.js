import React from 'react';
import DefaultSetting from "../components/common/DefaultSetting";
import SideNaviTemplate from "../components/sideNavi/SideNaviTemplate";
import SideTitle from "../components/sideNavi/SideTitle";
import SideElem from "../components/sideNavi/SideElem";
import ContentTemplate from "../components/childcare/ContentTemplate";
import LongTermPage from "../components/content/LongTermPage";

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

                    <LongTermPage/>

                </ContentTemplate>



            </DefaultSetting>
        </>
    );
};

export default FindClassPage;
