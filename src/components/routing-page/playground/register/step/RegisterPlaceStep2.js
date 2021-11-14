import React from 'react';
import {ContentHeader} from "../../../../common/layout/StyledHeader";
import ContainerSpaceVoteForm from "../../../../../containers/playground/register/ContainerSpaceVoteForm";
import ContainerMakeActionButtons from "../../../../../containers/playground/register/ContainerMakeActionButtons";
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
                <ContainerSpaceVoteForm />

                <PageButtonBlock>
                    <ContainerMakeActionButtons move={move}/>
                </PageButtonBlock>
            </ContentTemplate>

        </>
    );
};

export default RegisterPlaceStep2;
