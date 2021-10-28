import React from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {withRouter} from "react-router-dom";
import {setOriginalPost, updatePost} from "../../../modules/childcare/expertWrite";
import {removePost} from "../../../lib/api/expertPosts";
import ExpertPostActionButtons from "../post/ExpertPostActionButtons";
import PostBlock from "../../common/post/PostBlock";
import PostWriterInfo from "../../common/post/PostWriterInfo";
import ActivityTime from "../ActivityTime";
import Heart from "../../common/assets/like.png";

import RectButton from "../../common/RectButton";
import PostCreateDate from "../../common/post/PostCreateDate";


const PostContent = styled.div`
  box-sizing: border-box;
  height: fit-content;
  font-size: 1vw;
`;

const StyledPostHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: fit-content;
`;

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


const ExpertPostItem = ({expertPost}) => {
    const {
        created_at,
        writer,
        contents,
        writer_score,
        recruit_type,
        expert_id,
        start_date,
        start_time,
        end_date,
        end_time
    } = expertPost;
    const dispatch = useDispatch();

    const onEdit = () => {
        dispatch(setOriginalPost(expertPost));
    }

    const onRemove = async () => {
        try {
            await removePost(expert_id);
            window.location.reload()
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <PostBlock type={recruit_type}>
                <StyledPostHeader>
                    <PostWriterInfo writer={writer} review={writer_score}/>
                    <ExpertPostActionButtons onEdit={onEdit} onRemove={onRemove}/>
                </StyledPostHeader>
                <br/>

                <ActivityTime>활동 시간 : {`${start_date} ${start_time} ~ ${end_date} ${end_time}`}</ActivityTime>

                <PostContent dangerouslySetInnerHTML={{__html: contents}} />
                <PostCreateDate createDate={created_at} />

                <StyledPostFooter>
                    <SeparateArea>
                        <StyledInterest>
                            지원 2
                            관심 3
                        </StyledInterest>
                    </SeparateArea>
                    <SeparateArea>
                        <img src={Heart} style={{width: "1.25vw", height: "1.25vw"}}/>
                        <RectButton backgroundColor={"#FFB663"}>지원하기</RectButton>
                    </SeparateArea>
                </StyledPostFooter>
            </PostBlock>
        </>
    );
};


const ExpertPostList = ({expertPosts, loading, error, showWriteButton}) => {
    if (error) {
        return <>에러 발생</>
    }


    return (
        <>
            {!loading && expertPosts && (
                <div>
                    {expertPosts.data.slice(0).reverse().map(expertPost => (
                        <ExpertPostItem expertPost={expertPost} key={expertPost.expert_id}/>
                    ))}

                </div>
            )}

        </>

    );
};

export default withRouter(ExpertPostList);