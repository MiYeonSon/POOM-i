import React from 'react';
import styled from 'styled-components';
import Person from '../../../common/assets/005-gardener.png';
import {ProfileImage, StyledWriterId, UserInfoBlock} from "../../../common/post/WriterInfo";
import {classCommentRemovePost} from "../../../../lib/api/classCommentPosts";
import {useSelector} from "react-redux";
import CommentPostActionButton from "../comment-post/CommentPostActionButton";
import {
    CommentContent,
    CommentUnitBackground,
    CommentUnitContentTemplate
} from "../../../common/post/CommentUnit";

const CommentContentBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 21vw;
  overflow: auto;
`;


const CommentClassPostItem = ({post}) => {
    const {writer, contents, comment_id, writer_score} = post;

    const {user, token} = useSelector(({user}) => ({
        user: user.userInfo,
        token: user.token
    }));

    const ownPost = user.nick === writer;

    const onRemove = async () => {
        try {
            await classCommentRemovePost({token, commentId: comment_id});
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <CommentUnitBackground>

            <CommentUnitContentTemplate>

                <UserInfoBlock>
                    <ProfileImage size={2.5} imgSrc={Person}/>
                    <StyledWriterId>
                        {writer}
                        <div style={{fontSize : '0.7vw'}}>(TEMP: {writer_score})</div>
                    </StyledWriterId>
                </UserInfoBlock>

                <div style={{width: '100%', marginLeft: '1.5vw'}}>
                    <div style={{textAlign : 'right'}}>
                        {ownPost && <CommentPostActionButton backgroundColor={'#DEDEDE'} hoverColor={'#AAAAAA'} onRemove={onRemove}/> }
                    </div>

                    <CommentContent dangerouslySetInnerHTML={{__html: contents}}/>
                </div>

            </CommentUnitContentTemplate>
        </CommentUnitBackground>
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
