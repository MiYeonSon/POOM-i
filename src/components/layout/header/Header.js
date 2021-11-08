import React from 'react';
import NaviBar from "./NaviBar";
import ContainerLoginBar from "../../../containers/common/ContainerLoginBar";

const Header = () => {
    return (
        <div>
            <ContainerLoginBar />
            <NaviBar/>
        </div>
    );
};

export default Header;
