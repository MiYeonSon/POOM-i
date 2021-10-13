import React from 'react';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import SideNaviTemplate from "../components/sideNavi/SideNaviTemplate";
import Content from "../components/common/Content";
import SideTitle from "../components/sideNavi/SideTitle";
import SideElem from "../components/sideNavi/SideElem";
import ContentTemplate from "../components/expert/ContentTemplate";
import ShortTermPage from "../components/expert/content/ShortTermPage";
import LongTermPage from "../components/expert/content/LongTermPage";

const FindRearingPage = () => {
    return (
        <div>
            <Header/>
            <Content>
                <SideNaviTemplate>
                    <SideTitle>품앗이 찾기</SideTitle>
                    <SideElem select title={"품앗이 꾼 찾기"}/>
                    <SideElem title={"품앗이 반 찾기"}/>
                </SideNaviTemplate>
                <ContentTemplate>

                    <ShortTermPage/>

                </ContentTemplate>
            </Content>
            <Footer/>
        </div>
    );
};

export default FindRearingPage;
