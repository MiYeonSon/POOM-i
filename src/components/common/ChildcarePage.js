import React from 'react';
import ContentHeader from "./styledHeader/ContentHeader";
import Introduction from "./Introduction";

import ProfileImage from "./ProfileImage";

import PostListTemplate from "./PostListZone";
import NewPostInput from "./NewPostInput";
import PostBlock from "./post/PostBlock";
import CommonHr from "./CommonHr";
import Person from "./assets/005-gardener.png";
import Pencil from "./assets/pencil (1).png";
import ExpertPostListContainer from "../../containers/childcare/posts/ChildcarePostListContainer";

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
