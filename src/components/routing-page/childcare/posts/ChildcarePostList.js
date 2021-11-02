import React from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {withRouter} from "react-router-dom";
import {setOriginalPost} from "../../../../modules/childcare/childcareWrite";
import {removeChildcarePost} from "../../../../lib/api/childcarePosts";
import ChildcarePostActionButtons from "../post/ChildcarePostActionButtons";
import PostBlock from "../../../common/post/PostBlock";
import PostWriterInfo from "../../../common/post/PostWriterInfo";
import ActivityTime from "../../../common/ActivityTime";
import Heart from "../../../common/assets/like.png";

import RectButton from "../../../common/RectButton";
import PostCreateDate from "../../../common/post/PostCreateDate";
import CommentChildcareWriteActionButtons from "../comment-write/CommentChildcareWriteActionButtons";


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


const ChildcarePostItem = ({childcarePost}) => {
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
    } = childcarePost;
    const dispatch = useDispatch();

    const onEdit = () => {
        dispatch(setOriginalPost(childcarePost));
    }

    const onRemove = async () => {
        try {
            await removeChildcarePost(expert_id);
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
                    <ChildcarePostActionButtons onEdit={onEdit} onRemove={onRemove}/>
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
                        <img src={Heart} alt={'관심'} style={{width: "1.25vw", height: "1.25vw"}}/>
                        <CommentChildcareWriteActionButtons />
                    </SeparateArea>
                </StyledPostFooter>
            </PostBlock>
        </>
    );
};


const ChildcarePostList = ({childcarePosts, loading, error, showWriteButton}) => {
    if (error) {
        return <>에러 발생</>
    }


    return (
        <>
            {!loading && childcarePosts && (
                <div>
                    {childcarePosts.data.slice(0).reverse().map(childcarePost => (
                        <ChildcarePostItem childcarePost={childcarePost} key={childcarePost.expert_id}/>
                    ))}

                </div>
            )}

        </>

    );
};

export default withRouter(ChildcarePostList);