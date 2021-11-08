import React, {useEffect, useState} from 'react';
import DefaultSetting from "../../../components/common/DefaultSetting";
import SideNaviTemplate from "../../../components/layout/sideNavi/SideNaviTemplate";
import SideTitle from "../../../components/layout/sideNavi/SideTitle";
import SideElem from "../../../components/layout/sideNavi/SideElem";
import PageContentTemplate from "../../../components/common/layout/PageContentTemplate";
import RegisterPlaceStep0 from "../../../components/routing-page/playground/register/step/RegisterPlaceStep0";
import RegisterPlaceStep1 from "../../../components/routing-page/playground/register/step1/RegisterPlaceStep1";
import RegisterPlaceStep2 from "../../../components/routing-page/playground/register/step/RegisterPlaceStep2";
import RegisterPlaceStep3 from "../../../components/routing-page/playground/register/step/RegisterPlaceStep3";
import PageButton from "../../../components/routing-page/register/PageButton";
import PageButtonBlock from "../../../components/routing-page/register/PageButtonBlock";

const RegisterPlacePage = () => {
    const [page, setPage] = useState(0);
    const pageArr = [<RegisterPlaceStep0/>, <RegisterPlaceStep1/>, <RegisterPlaceStep2/>, <RegisterPlaceStep3/>];

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
        });
    };


    useEffect(() => {
        scrollTop();
    }, [page]);

    return (
        <>
            <DefaultSetting>

                <SideNaviTemplate>
                    <SideTitle>품앗이 터 찾기</SideTitle>
                    <SideElem title={"우리 동네 품앗이 터 찾기"} link={"/playground"}/>
                    <SideElem title={"품앗이 터 등록하기"} link={"/playground/register"} select/>
                </SideNaviTemplate>

                <PageContentTemplate>
                    {pageArr[page]}
                    <PageButtonBlock>
                        {
                            (page >= 1 && page < 3) && (
                                <PageButton onClick={page > -1 ? () => setPage(page - 1) : setPage(0)}>이전
                                </PageButton>)
                        }
                        {
                            page < 3 && (
                                <PageButton onClick={page < 4 ? () => setPage(page + 1) : setPage(3)} highlight>
                                    다음
                                </PageButton>
                            )
                        }
                    </PageButtonBlock>
                </PageContentTemplate>


            </DefaultSetting>
        </>
    );
};

export default RegisterPlacePage;
