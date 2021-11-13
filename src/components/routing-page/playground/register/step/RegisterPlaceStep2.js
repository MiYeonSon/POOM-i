import React from 'react';
import {ContentHeader} from "../../../../common/layout/StyledHeader";
import SpaceVoteFormContainer from "../../../../../containers/playground/register/SpaceVoteFormContainer";
import MakeActionButtonsContainer from "../../../../../containers/playground/register/MakeActionButtonsContainer";
import PageButtonBlock from "../../../register/PageButtonBlock";
import {ContentTemplate, Introduction} from "../../../../common/layout/StyledLayout";



const RegisterPlaceStep2 = ({move}) => {
    
    return (
        <>
            <ContentHeader>품앗이 터 등록하기_Step 02</ContentHeader>
            <Introduction>
                단지 내 거주민들에게 배포할 폼을 제작합니다.
            </Introduction>

            <ContentTemplate>
                <SpaceVoteFormContainer />

                <PageButtonBlock>
                    <MakeActionButtonsContainer move={move}/>
                </PageButtonBlock>
            </ContentTemplate>

        </>
    );
};

export default RegisterPlaceStep2;
