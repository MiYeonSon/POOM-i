import React, {useState} from 'react';
import ContentHeader from "../common/styledHeader/ContentHeader";
import Introduction from "../common/Introduction";

import ProfileImage from "../common/ProfileImage";

import PostListTemplate from "../childcare/PostListZone";
import NewPostInput from "../childcare/NewPostInput";
import PostBlock from "../common/post/PostBlock";
import CommonHr from "../common/CommonHr";
import Person from "../common/assets/005-gardener.png";
import Pencil from "../common/assets/pencil (1).png";
import styled from "styled-components";
import ExpertPostListContainer from "../../containers/childcare/posts/ExpertPostListContainer";


const StyledPostFooter = styled.div`
      box-sizing: border-box;
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;

const StyledInterest = styled.div`
      box-sizing: border-box;
      display: inline-block;
      width: fit-content;
      height: fit-content;
      color: #565656;
      font-weight: 300;
      font-size: 0.8vw;
    `;


const SeparateArea = styled.div`
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
    `;



const ShortTermPage = () => {

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

export default ShortTermPage;
