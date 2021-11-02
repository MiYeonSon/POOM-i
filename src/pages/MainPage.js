/*
 * 웹 페이지의 첫 페이지
 */
import React from "react";
import "./MainPage.css";

import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/header/Header";

import WebBanner from "../components/routing-page/main/WebBanner";
import PoomIFeacture from "../components/routing-page/main/PoomIFeacture";
import PoomISkills from "../components/routing-page/main/PoomISkills";
import PoomICS from "../components/routing-page/main/PoomICS";


const MainPage = () => {
    return (
        <div className={"Main"}>
            <Header />
            <div className={"Content"}>
                <WebBanner/>
                <PoomIFeacture/>
                <PoomISkills/>
                <PoomICS/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainPage;