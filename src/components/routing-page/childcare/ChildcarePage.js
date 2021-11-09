import React from 'react';
import Introduction from "../../common/Introduction";
import ContentTemplate from "../../common/layout/ContentTemplate";
import NewPostInput from "../../common/NewPostInput";
import PostItem from "../../common/post/PostItem";
import CommonHr from "../../common/CommonHr";
import ExpertPostListContainer from "../../../containers/childcare/posts/ContainerChildcarePostList";
import {ProfileImage} from "../../common/post/WriterInfo";
import {ContentHeader} from "../../common/StyledHeader";
import CallingCard from "../mypage/myInfo/CallingCard";
import { ImPencil2 } from "react-icons/im";

const ChildcarePage = () => {

    return (
        <>
            <ContentHeader>품앗이 꾼 찾기</ContentHeader>
            <Introduction>
                갑작스러운 일에 많이 당황하셨나요? <br/>
                우리 동네 품앗이 꾼들에게 도움을 요청해보아요!
            </Introduction>

            <ContentTemplate>
                <PostItem type={"postInput"} content={'childcare'}>
                    <ProfileImage size={4} imgSrc={CallingCard} />
                    <NewPostInput content={'childcare'}>
                        품앗이 꾼 도움 요청/자원 글 작성하기...
                        <ImPencil2 size={20} />
                    </NewPostInput>
                </PostItem>

                <CommonHr/>

                <ExpertPostListContainer />

            </ContentTemplate>
        </>
    );
};

export default ChildcarePage;
