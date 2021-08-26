import React from 'react';
import styled from "styled-components";

import ContentHeader from "../../common/ContentHeader";
import Introduction from "../../common/Introduction";
import PostBlock from "../../common/PostBlock";
import ProfileImage from "../../common/ProfileImage";
import CommonHr from "../../common/CommonHr";
import PostWriterInfo from "../../common/PostWriterInfo";
import OrangeRectButton from "../../common/OrangeRectButton";
import Person from "../../common/assets/005-gardener.png";
import Pencil from "../../common/assets/pencil (1).png";
import Heart from "../../common/assets/like.png";

import PostListZone from "../PostListZone";

const LongTermPage = () => {
    /*
     * 영역 간 분리는 Zone
     * 영역 내 분리는 Area
     */

    const NewPostInput = styled.button`
      box-sizing: border-box;
      padding: 0 1.5vw;
      width: 80%;
      height: 3vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'LotteMartDream';
      font-size: 0.8vw;
      color: #AAAAAA;
      background: #F3F3F3;
      border: none;
      outline: #DEDEDE;
      border-radius: 5px;
      text-align: left;
      cursor: pointer;
      overflow: hidden;
    `;


    const StyledPostContent = styled.div`
      box-sizing: border-box;
      width: 100%;
      height: fit-content;
      margin: 1vw 0 2vw;
      color: #565656;
      font-weight: 300;
      white-space: pre-wrap;
      line-height: 1.2vw;
    `;


    const PoomClassInfoTemplate = styled.div`
      box-sizing: border-box;
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;

    const PoomClassTitle = styled.div`
      box-sizing: border-box;
      width: fit-content;
      height: fit-content;
      margin: 0.5vw 0;
      color: #565656;
      font-size: 1.2vw;
    `;

    const PoomClassTime = styled.div`
      box-sizing: border-box;
      width: fit-content;
      height: fit-content;
      color: #AAAAAA;
      font-size: 0.8vw;
      font-weight: 300;
    `;

    const PoomClassInfo = styled.div`
      box-sizing: border-box;
      width: fit-content;
      height: fit-content;
    `;

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

    const AttachedImgZone = styled.div`
      box-sizing: border-box;
      width: 100%;
      height: 10vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;

    const AttachedImgArea = styled.div`
      box-sizing: border-box;
      width: 85%;
      height: 10vw;
      text-align: center;
    `;

    const StyledAttachedImg = styled.div`
      box-sizing: border-box;
      display: inline-block;
      margin: 0 0.3vw;
      width: 30%;
      height: 10vw;
      background-color: #F2F2F2;
    `;

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

    return (
        <div>
            <ContentHeader>품앗이 반 찾기</ContentHeader>
            <Introduction>
                품앗이 반은 품앗이 반을 이루는 가족끼리 정기적으로 모여 자발적으로 활동을하는 모입입니다! <br/>
                품앗이 반에 참여하여 아이의 친구들과 재미있는 활동을 시작해보아요 :)
            </Introduction>

            <PostListZone>
                <PostBlock postInput={true}>
                    <ProfileImage size={4} imgSrc={Person}></ProfileImage>
                    <NewPostInput>
                        글 작성하기...
                        <img src={Pencil} alt="작성" style={{width: "1.2vw"}}/>
                    </NewPostInput>
                </PostBlock>

                <CommonHr/>

                <PostBlock postInput={false}>
                    <PoomClassInfoTemplate>
                        <PoomClassInfo>
                            <PoomClassTitle>
                                우리동네 품앗이 <WriterInfo>작성자 : 준이맘</WriterInfo>
                            </PoomClassTitle>
                            <PoomClassTime>활동시간 : 매주 수요일 17시</PoomClassTime>
                        </PoomClassInfo>
                        <img src={Heart} style={{width: "1.25vw", height: "1.25vw"}}/>
                    </PoomClassInfoTemplate>

                    <StyledPostContent>
                        오랜만에 야외로 나가보았습니다~ <br/>
                        오랜만의 야외활동이라 그런지 아이들이 너무 좋아해서 즐거운 활동이었습니다. <br/>
                        기존에 만들었던 천막을 활용해 놀이를 하니 아이들도 뿌듯함을 느끼더라구요!
                    </StyledPostContent>

                    <AttachedImgZone>
                        <StyledButton> &lt; </StyledButton>

                        <AttachedImgArea>
                            <StyledAttachedImg/>
                            <StyledAttachedImg/>
                            <StyledAttachedImg/>

                        </AttachedImgArea>

                        <StyledButton> > </StyledButton>
                    </AttachedImgZone>

                    <StyledComment>댓글 5</StyledComment>
                </PostBlock>

                <PostBlock postInput={false}>
                    <PoomClassInfoTemplate>
                        <PoomClassInfo>
                            <PoomClassTitle>
                                우리동네 품앗이 <WriterInfo>작성자 : 준이맘</WriterInfo>
                            </PoomClassTitle>
                            <PoomClassTime>활동시간 : 매주 수요일 17시</PoomClassTime>
                        </PoomClassInfo>
                        <img src={Heart} style={{width: "1.25vw", height: "1.25vw"}}/>
                    </PoomClassInfoTemplate>

                    <StyledPostContent>
                        오랜만에 야외로 나가보았습니다~ <br/>
                        오랜만의 야외활동이라 그런지 아이들이 너무 좋아해서 즐거운 활동이었습니다. <br/>
                        기존에 만들었던 천막을 활용해 놀이를 하니 아이들도 뿌듯함을 느끼더라구요!
                    </StyledPostContent>

                    <AttachedImgZone>
                        <StyledButton> &lt; </StyledButton>

                        <AttachedImgArea>
                            <StyledAttachedImg/>
                            <StyledAttachedImg/>
                            <StyledAttachedImg/>

                        </AttachedImgArea>

                        <StyledButton> > </StyledButton>
                    </AttachedImgZone>

                    <StyledComment>댓글 5</StyledComment>
                </PostBlock>

            </PostListZone>
        </div>
    );
};

export default LongTermPage;
