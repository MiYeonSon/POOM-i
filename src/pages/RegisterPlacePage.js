import React, {useState} from 'react';
import DefaultSetting from "../components/common/DefaultSetting";
import SideNaviTemplate from "../components/sideNavi/SideNaviTemplate";
import SideTitle from "../components/sideNavi/SideTitle";
import SideElem from "../components/sideNavi/SideElem";
import ContentTemplate from "../components/childcare/ContentTemplate";
import RegisterPlaceStep0 from "../components/playground/RegisterPlaceStep0";
import RegisterPlaceStep1 from "../components/playground/RegisterPlaceStep1";

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
