import React from "react";
import "./NaviBar.css";
import MainLogo from "../common/assets/mainLogo.png";
import {Link} from "react-router-dom";

const NaviBar = () => {
    return (
        <div className={"NaviBar"}>
            <Link to={"/"}><img src={MainLogo} alt="mainLogo" /></Link>
            <div className={"NaviMenu"}>
                <button>서비스 안내</button>
                <Link to={"/findRearing/shortTerm"}><button>품앗이 찾기</button></Link>
                <button>품앗이 터 찾기</button>
            </div>
        </div>
    );
};

export default NaviBar;