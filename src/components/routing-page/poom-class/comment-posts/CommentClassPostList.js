import React from 'react';
import styled from 'styled-components';
import Person from '../../../common/assets/005-gardener.png';
import {ProfileImage, StyledWriterId, UserInfoBlock} from "../../../common/post/WriterInfo";
import {classCommentRemovePost} from "../../../../lib/api/poom-class/classCommentPosts";
import {useSelector} from "react-redux";
import CommentPostActionButton from "../comment-post/CommentPostActionButton";
import {
    CommentContent,
    CommentUnitBackground,
    CommentUnitContentTemplate
} from "../../../common/post/CommentUnit";
import {BsFillPersonFill} from "react-icons/bs";

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
                    <BsFillPersonFill size={60} color={'#8E8E8E'} style={{
                        padding : '0.2vw',
                        boxSizing : 'border-box',
                        border: '1.5px solid #8E8E8E',
                        borderRadius: '100%'
                    }}/>
                    <StyledWriterId>
                        {writer}
                        <div style={{width : '100%', fontSize : '0.7vw'}}>(TEMP: {writer_score})</div>
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
