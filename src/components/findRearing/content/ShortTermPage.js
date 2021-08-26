import React from 'react';
import ContentHeader from "../../common/ContentHeader";
import Introduction from "../../common/Introduction";

import ProfileImage from "../../common/ProfileImage";

import PostListTemplate from "../PostListZone";
import NewPostInput from "../NewPostInput";
import PostBlock from "../../common/PostBlock";
import PostContent from "../PostContent";
import CommonHr from "../../common/CommonHr";
import PostWriterInfo from "../../common/PostWriterInfo";
import OrangeRectButton from "../../common/OrangeRectButton";
import Person from "../../common/assets/005-gardener.png";
import Pencil from "../../common/assets/pencil (1).png";
import Heart from "../../common/assets/like.png";
import styled from "styled-components";
import ActivityTime from "../ActivityTime";


const ShortTermPage = () => {
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

    return (
        <div>
            <ContentHeader>품앗이 꾼 찾기</ContentHeader>
            <Introduction>
                갑작스러운 일에 많이 당황하셨나요? <br/>
                우리 동네 품앗이 꾼들에게 도움을 요청해보아요!
            </Introduction>

            <PostListTemplate>
                <PostBlock postInput={true}>
                    <ProfileImage size={4} imgSrc={Person}></ProfileImage>
                    <NewPostInput>
                        품앗이 꾼 도움 요청/자원 글 작성하기...
                        <img src={Pencil} alt="작성" style={{width: "1.2vw"}}/>
                    </NewPostInput>
                </PostBlock>

                <CommonHr/>

                <PostBlock postInput={false}>
                    <PostWriterInfo writer={"준이맘"} review={4}/>
                    <ActivityTime />
                    <PostContent>
                        갑자기 야근이 생겼어요. 한 9시쯤에야 집에 들어갈 수 있을 것 같은데 혹시 우리 애 봐주실 수 있는 분 계신가요?
                    </PostContent>
                    <StyledPostFooter>
                        <SeparateArea>
                            <StyledInterest>
                                지원 2
                                관심 3
                            </StyledInterest>
                        </SeparateArea>
                        <SeparateArea>
                            <img src={Heart} style={{width: "1.25vw", height: "1.25vw"}}/>
                            <OrangeRectButton>지원하기</OrangeRectButton>
                        </SeparateArea>
                    </StyledPostFooter>
                </PostBlock>
                <PostBlock postInput={false} volunteer={true}>
                    <PostWriterInfo writer={"준이맘"} review={4}/>
                    <ActivityTime />
                    <PostContent>
                        갑자기 비가 오네요.. 딸아이 마중 나가려는데 @@초등학교 자녀 분 계심 같이 우산 씌워줄게요! <br />
                        도움 필요하신 분들 신청하세요! 선착 2분(아이 : 2명)입니다.
                    </PostContent>
                    <StyledPostFooter>
                        <SeparateArea>
                            <StyledInterest>
                                지원 2
                                관심 3
                            </StyledInterest>
                        </SeparateArea>
                        <SeparateArea>
                            <img src={Heart} style={{width: "1.25vw", height: "1.25vw"}}/>
                            <OrangeRectButton>지원하기</OrangeRectButton>
                        </SeparateArea>
                    </StyledPostFooter>
                </PostBlock>
            </PostListTemplate>
        </div>
    );
};

export default ShortTermPage;
