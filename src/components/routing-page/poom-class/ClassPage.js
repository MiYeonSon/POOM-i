import React from 'react';
import NewPostInput from "../../common/NewPostInput";
import PostItemTemplate from "../../common/post/PostItemTemplate";
import ContainerFindClassPostList from "../../../containers/poom-class/posts/ContainerFindClassPostList";
import {ContentHeader} from "../../common/layout/StyledHeader";
import {ImPencil2} from "react-icons/im";
import {BsFillPersonFill} from "react-icons/bs";
import {ContentTemplate, Introduction} from "../../common/layout/StyledLayout";
import {CommonHr} from "../../common/styling/StyledTag";

// 필요 스타일링 컴포넌트(예상)
/*
// 작성된 글 제목 영역 레이아웃
const PostTitleTemplate = styled.div`
      box-sizing: border-box;
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;

// 품앗이 반 정보 영역
const PoomClassInfoArea = styled.div`
      box-sizing: border-box;
      width: fit-content;
      height: fit-content;
    `;

// 품앗이 반 제목
const PoomClassTitle = styled.div`
      box-sizing: border-box;
      width: fit-content;
      height: fit-content;
      margin: 0.5vw 0;
      color: #565656;
      font-size: 1.2vw;
    `;

// 품앗이 반 활동 시간
const PoomClassTime = styled.div`
      box-sizing: border-box;
      width: fit-content;
      height: fit-content;
      color: #AAAAAA;
      font-size: 0.8vw;
      font-weight: 300;
    `;

// 글 작성자
const WriterInfo = styled.div`
      box-sizing: border-box;
      width: fit-content;
      height: fit-content;
      margin: 0 0.25vw;
      display: inline-block;
      color: #565656;
      font-size: 0.8vw;
      font-weight: 300;
    `;


// 이미지 영역 레이아웃
const AttachedImgTemplate = styled.div`
      box-sizing: border-box;
      width: 100%;
      height: 10vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;

// 이미지 첨부 사진 영역(한 공간에 최대 3장 출력)
const AttachedImgArea = styled.div`
      box-sizing: border-box;
      width: 85%;
      height: 10vw;
      text-align: center;
    `;

// 첨부된 이미지 스타일링
const StyledAttachedImg = styled.div`
      box-sizing: border-box;
      display: inline-block;
      margin: 0 0.3vw;
      width: 30%;
      height: 10vw;
      background-color: #F2F2F2;
    `;

// 첨부된 이미지를 보기 위한 이동 버튼
const StyledButton = styled.button`
      width: fit-content;
      height: 100%;
      font-family: 'BMJUA';
      font-size: 2vw;
      color: #DEDEDE;
      background: none;
      border: none;
      cursor: pointer;
    `;

// 댓글
const StyledComment = styled.div`
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
      height: fit-content;
      margin: 1vw 0 0;
      padding: 0vw 1vw;
      text-align: right;
      color: #565656;
      font-weight: 300;
      font-size: 0.8vw;
    `;

const PostContent = styled.div`
      box-sizing: border-box;
      height: fit-content;
      font-size: 1vw;
      margin: 1vw 0 2vw;
    `;
*/

const ClassPage = () => {
    return (
        <>
            <ContentHeader>품앗이 반 찾기</ContentHeader>
            <Introduction>
                품앗이 반은 품앗이 반을 이루는 가족끼리 정기적으로 모여 자발적으로 활동을 하는 모입입니다! <br/>
                품앗이 반에 참여하여 아이의 친구들과 재미있는 활동을 시작해보아요 :)
            </Introduction>

            <ContentTemplate>
                <PostItemTemplate type={"postInput"}>
                    <BsFillPersonFill size={60} color={'#8E8E8E'} style={{
                        padding : '0.2vw',
                        boxSizing : 'border-box',
                        border: '1.5px solid #8E8E8E',
                        borderRadius: '100%'
                    }}/>
                    <NewPostInput content={'class'}>
                        품앗이 꾼 도움 요청/자원 글 작성하기...
                        <ImPencil2 size={20} />
                    </NewPostInput>
                </PostItemTemplate>

                <CommonHr/>

                <ContainerFindClassPostList/>

            </ContentTemplate>

        </>
    );
};

export default ClassPage;
