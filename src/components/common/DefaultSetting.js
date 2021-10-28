import React from 'react';
import Header from "../header/Header";
import Content from "./Content";
import Footer from "../footer/Footer";

const DefaultSetting = ({children}) => {
    return (
        <>
            <Header/>
            <Content>
                {children}
            </Content>
            <Footer/>

        </>
    );
};

export default DefaultSetting;
