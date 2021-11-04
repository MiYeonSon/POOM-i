import React from 'react';
import styled from 'styled-components';
import Person from '../../../common/assets/005-gardener.png';
import {ProfileImage, StyledWriterId, UserInfoBlock} from "../../../common/post/WriterInfo";
import {classCommentRemovePost} from "../../../../lib/api/classCommentPosts";
import {useSelector} from "react-redux";
import CommentPostActionButton from "../comment-post/CommentPostActionButton";

const CommentUnitBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;

  margin: 0.5vw auto;
  padding: 1vw 0;
  border: 1px solid #ECECEC;
  border-radius: 0.25vw;
  background-color: #F5F5F5;

`;

const CommentContent = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: fit-content;
  margin: 0 0.5vw;
  padding: 0;
`;

const CommentContentBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 21vw;
  overflow: auto;
`;

const CommentHeaderBlock = styled.div`
  box-sizing: border-box;
  width: fit-content;
  display: flex;
  justify-content: space-between;
  font-size: 1.1vw;
`;

const CommentUnitContentBlock = styled.div`
  box-sizing: border-box;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommentClassPostItem = ({post}) => {
    const {writer, contents, comment_id, writer_score} = post;

    const {token} = useSelector(({user}) => ({token: user.userInfo.token}));


    const onRemove = async () => {
        try {
            await classCommentRemovePost({token, commentId: comment_id});
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <CommentUnitBlock>

            <CommentUnitContentBlock>
                <CommentHeaderBlock>
                    <UserInfoBlock style={{margin: '0 1vw'}}>
                        <ProfileImage size={2.5} imgSrc={Person}/>
                        <StyledWriterId>{writer}</StyledWriterId>
                    </UserInfoBlock>
                </CommentHeaderBlock>

                {/*
                <WriterScore score={writer_score} width={'100%'} fontWeight={'lighter'} fontSize={'0.6vw'}/>
                */}
                <CommentContent style={
                    {
                        border: '1px solid red'
                    }
                } dangerouslySetInnerHTML={{__html: contents}}/>
                <div style={{
                    display: 'flex',
                    justifyContent: 'end',
                    margin: '0 1vw',
                    border: '1px solid red'
                }}>
                    <CommentPostActionButton backgroundColor={'#DEDEDE'} hoverColor={'#AAAAAA'} onRemove={onRemove}/>
                </div>
            </CommentUnitContentBlock>
        </CommentUnitBlock>
    )
}

const CommentClassPostList = ({posts, loading, error, showWriteButton}) => {
    if (error) {
        return <div>에러 발생</div>
    }

    return (
        <>
            {!loading && posts &&
            <CommentContentBlock>
                {posts.data.map(post => (
                    <CommentClassPostItem post={post} key={post.comment_id}/>
                ))}
            </CommentContentBlock>
            }
        </>
    );
};

export default CommentClassPostList;
