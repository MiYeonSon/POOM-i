import React from 'react';
import {ContentTemplate, Introduction} from "../../common/layout/StyledLayout";
import {CommonHr} from "../../common/styling/StyledTag";

import NewPostInput from "../../common/NewPostInput";
import PostItemTemplate from "../../common/post/PostItemTemplate";
import ContainerChildcarePostList from "../../../containers/childcare/posts/ContainerChildcarePostList";
import {ContentHeader} from "../../common/layout/StyledHeader";
import { ImPencil2 } from "react-icons/im";
import {BsFillPersonFill} from "react-icons/bs";

const ChildcarePage = () => {
    return (
        <>
            <ContentHeader>품앗이 꾼 찾기</ContentHeader>
            <Introduction>
                갑작스러운 일에 많이 당황하셨나요? <br/>
                우리 동네 품앗이 꾼들에게 도움을 요청해보아요!
            </Introduction>

            <ContentTemplate>
                <PostItemTemplate type={"postInput"} content={'childcare'}>
                    <BsFillPersonFill size={60} color={'#8E8E8E'} style={{
                        padding : '0.2vw',
                        boxSizing : 'border-box',
                        border: '1.5px solid #8E8E8E',
                        borderRadius: '100%'
                    }}/>
                    <NewPostInput content={'childcare'}>
                        품앗이 꾼 도움 요청/자원 글 작성하기...
                        <ImPencil2 size={20} />
                    </NewPostInput>
                </PostItemTemplate>

                <CommonHr/>

                <ContainerChildcarePostList />

            </ContentTemplate>
        </>
    );
};

export default ChildcarePage;
