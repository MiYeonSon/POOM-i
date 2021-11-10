import React from 'react';
import Header from "../../layout/header/Header";
import Content from "../Content";
import Footer from "../../layout/footer/Footer";

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
