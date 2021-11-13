/*
 * 웹 페이지의 첫 페이지
 */
import React from "react";
import styled from 'styled-components';

import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/header/Header";

import WebBanner from "../components/routing-page/main/WebBanner";
import PoomIFeature from "../components/routing-page/main/PoomIFeature";
import PoomISkills from "../components/routing-page/main/PoomISkills";
import PoomICS from "../components/routing-page/main/PoomICS";


const MainTemplate = styled.div`
  box-sizing: border-box;
  width: 100vw;
`;

const MainContentTemplate = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100%;
  margin: 0 auto;
`;

const MainPage = () => {
    return (
        <MainTemplate>
            <Header/>
            <MainContentTemplate>
                <WebBanner/>
                <PoomIFeature/>
                <PoomISkills/>
                <PoomICS/>
            </MainContentTemplate>
            <Footer/>
        </MainTemplate>
    );
};

export default MainPage;