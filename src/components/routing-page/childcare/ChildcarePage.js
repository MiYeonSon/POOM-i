import React from 'react';
import ContentHeader from "../../common/styledHeader/ContentHeader";
import Introduction from "../../common/Introduction";


import PostListTemplate from "../../common/PostListZone";
import NewPostInput from "../../common/NewPostInput";
import PostBlock from "../../common/post/PostBlock";
import CommonHr from "../../common/CommonHr";
import Person from "../../common/assets/005-gardener.png";
import Pencil from "../../common/assets/pencil (1).png";
import ExpertPostListContainer from "../../../containers/childcare/posts/ContainerChildcarePostList";
import {ProfileImage} from "../../common/post/WriterInfo";

const ChildcarePage = () => {

    return (
        <>
            <ContentHeader>품앗이 꾼 찾기</ContentHeader>
            <Introduction>
                갑작스러운 일에 많이 당황하셨나요? <br/>
                우리 동네 품앗이 꾼들에게 도움을 요청해보아요!
            </Introduction>

            <PostListTemplate>
                <PostBlock type={"postInput"}>
                    <ProfileImage size={4} imgSrc={Person}></ProfileImage>
                    <NewPostInput content={'childcare'}>
                        품앗이 꾼 도움 요청/자원 글 작성하기...
                        <img src={Pencil} alt="작성" style={{width: "1.2vw"}}/>
                    </NewPostInput>
                </PostBlock>

                <CommonHr/>

                <ExpertPostListContainer />

            </PostListTemplate>
        </>
    );
};

export default ChildcarePage;
