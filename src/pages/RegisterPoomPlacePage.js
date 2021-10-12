import React from 'react';
import Header from "../components/header/Header";
import Content from "../components/common/Content";
import SideNaviTemplate from "../components/sideNavi/SideNaviTemplate";
import SideTitle from "../components/sideNavi/SideTitle";
import SideElem from "../components/sideNavi/SideElem";
import Footer from "../components/footer/Footer";
import ContentHeader from "../components/common/ContentHeader";
import ContentTemplate from "../components/findRearing/ContentTemplate";

const RegisterPoomPlacePage = () => {
    return (
        <div className={"PoomPlace"}>
            <Header/>
            <Content>
                <SideNaviTemplate>
                    <SideTitle>품앗이 터 등록하기</SideTitle>
                    <SideElem title={"우리 동네 품앗이 터 찾기"}/>
                    <SideElem title={"품앗이 터 등록하기"}/>
                </SideNaviTemplate>
                <ContentTemplate>
                    <RegisterPoomPlacePage />
                </ContentTemplate>
            </Content>
            <Footer/>

        </div>
    );
};

export default RegisterPoomPlacePage;
