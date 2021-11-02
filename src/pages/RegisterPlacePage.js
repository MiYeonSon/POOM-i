import React, {useState} from 'react';
import DefaultSetting from "../components/common/DefaultSetting";
import SideNaviTemplate from "../components/layout/sideNavi/SideNaviTemplate";
import SideTitle from "../components/layout/sideNavi/SideTitle";
import SideElem from "../components/layout/sideNavi/SideElem";
import ContentTemplate from "../components/common/ContentTemplate";
import RegisterPlaceStep0 from "../components/routing-page/playground/RegisterPlaceStep0";
import RegisterPlaceStep1 from "../components/routing-page/playground/RegisterPlaceStep1";

const RegisterPlacePage = () => {
    const [page, setPage] = useState(0);
    const pageArr = [];

    return (
        <>
            <DefaultSetting>

                <SideNaviTemplate>
                    <SideTitle>품앗이 터 찾기</SideTitle>
                    <SideElem title={"우리 동네 품앗이 터 찾기"} link={"/playground"}/>
                    <SideElem title={"품앗이 터 등록하기"} link={"/playground/register"} select/>
                </SideNaviTemplate>

                <ContentTemplate>
                    <RegisterPlaceStep1 />
                </ContentTemplate>

            </DefaultSetting>
        </>
    );
};

export default RegisterPlacePage;
