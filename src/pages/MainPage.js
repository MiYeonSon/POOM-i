/*
 * 웹 페이지의 첫 페이지
 */
import React from "react";
import "./MainPage.css";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import WebBanner from "../components/main/WebBanner";
import PoomIFeacture from "../components/main/PoomIFeacture";
import PoomISkills from "../components/main/PoomISkills";
import PoomICS from "../components/main/PoomICS";


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