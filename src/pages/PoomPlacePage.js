/*
 * 품앗이 터 찾기 페이지
 */
import React from 'react';
import Header from "../components/header/Header";
import WebBanner from "../components/main/WebBanner";
import PoomIFeacture from "../components/main/PoomIFeacture";
import PoomISkills from "../components/main/PoomISkills";
import PoomICS from "../components/main/PoomICS";
import Footer from "../components/footer/Footer";
import SideTitle from "../components/sideNavi/SideTitle";
import SideElem from "../components/sideNavi/SideElem";
import SideNaviTemplate from "../components/sideNavi/SideNaviTemplate";
import Content from "../components/common/Content";
import ContentTemplate from "../components/findRearing/ContentTemplate";
import RegisterPoomPlacePage from "./RegisterPoomPlacePage";

const PoomPlacePage = () => {
    return (
        <div className={"PoomPlace"}>
            <Header/>
            <Content>
                <SideNaviTemplate>
                    <SideTitle>품앗이 터 찾기</SideTitle>
                    <SideElem title={"우리 동네 품앗이 터 찾기"}/>
                    <SideElem title={"품앗이 터 등록하기"}/>
                </SideNaviTemplate>
                <ContentTemplate>
                </ContentTemplate>
            </Content>
            <Footer/>
        </div>
    );
};

export default PoomPlacePage;
