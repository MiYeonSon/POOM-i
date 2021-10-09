import React from 'react';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import SideNaviTemplate from "../components/sideNavi/SideNaviTemplate";
import Content from "../components/common/Content";
import SideTitle from "../components/sideNavi/SideTitle";
import SideElem from "../components/sideNavi/SideElem";
import ContentTemplate from "../components/findRearing/ContentTemplate";

import ShortTermPage from "../components/findRearing/content/ShortTermPage";
import LongTermPage from "../components/findRearing/content/LongTermPage";

const FindRearingPage = () => {
    return (
        <div>
            <Header/>
            <Content>
                <SideNaviTemplate>
                    <SideTitle>품앗이 찾기</SideTitle>
                    <SideElem title={"품앗이 꾼 찾기"}/>
                    <SideElem title={"품앗이 반 찾기"}/>
                </SideNaviTemplate>
                <ContentTemplate>
                    {/*
                    <ShortTermPage />
                    */}
                    <LongTermPage />
                </ContentTemplate>
            </Content>
            <Footer/>
        </div>
    );
};

export default FindRearingPage;
