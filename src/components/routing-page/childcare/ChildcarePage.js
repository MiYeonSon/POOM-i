import React from 'react';
import Introduction from "../../common/Introduction";

import ContentTemplate from "../../common/layout/ContentTemplate";
import NewPostInput from "../../common/NewPostInput";
import PostBlock from "../../common/post/PostBlock";
import CommonHr from "../../common/CommonHr";
import Person from "../../common/assets/005-gardener.png";
import Pencil from "../../common/assets/pencil (1).png";
import ExpertPostListContainer from "../../../containers/childcare/posts/ContainerChildcarePostList";
import {ProfileImage} from "../../common/post/WriterInfo";
import {ContentHeader} from "../../common/StyledHeader";

const ChildcarePage = () => {

    return (
        <>
            <ContentHeader>품앗이 꾼 찾기</ContentHeader>
            <Introduction>
                갑작스러운 일에 많이 당황하셨나요? <br/>
                우리 동네 품앗이 꾼들에게 도움을 요청해보아요!
            </Introduction>

            <ContentTemplate>
                <PostBlock type={"postInput"}>
                    <ProfileImage size={4} imgSrc={Person}></ProfileImage>
                    <NewPostInput content={'childcare'}>
                        품앗이 꾼 도움 요청/자원 글 작성하기...
                        <img src={Pencil} alt="작성" style={{width: "1.2vw"}}/>
                    </NewPostInput>
                </PostBlock>

                <CommonHr/>

                <ExpertPostListContainer />

            </ContentTemplate>
        </>
    );
};

export default ChildcarePage;
