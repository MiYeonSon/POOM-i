import React from 'react';
import Introduction from "../../../../common/layout/Introduction";
import ContentTemplate from "../../../../common/layout/ContentTemplate";
import {ContentHeader} from "../../../../common/layout/StyledHeader";
import SpaceVoteFormContainer from "../../../../../containers/playground/register/SpaceVoteFormContainer";
import MakeActionButtonsContainer from "../../../../../containers/playground/register/MakeActionButtonsContainer";



const RegisterPlaceStep2 = () => {
    
    return (
        <>
            <ContentHeader>품앗이 터 등록하기_Step 02</ContentHeader>
            <Introduction>
                단지 내 거주민들에게 배포할 폼을 제작합니다.
            </Introduction>

            <ContentTemplate>
                <SpaceVoteFormContainer />
                <MakeActionButtonsContainer />
            </ContentTemplate>

        </>
    );
};

export default RegisterPlaceStep2;
