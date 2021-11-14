import React from 'react';
import styled from 'styled-components';
import {UserInfoBlock} from "../../../common/post/WriterInfo";
import {classCommentRemovePost} from "../../../../lib/api/poom-class/classCommentPosts";
import {useSelector} from "react-redux";
import CommentPostActionButton from "../comment-post/CommentPostActionButton";
import {
    CommentContent,
    CommentTemplate,
} from "../../../common/post/CommentUnit";
import {BsFillPersonFill} from "react-icons/bs";

const CommentContentBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 0 0.5vw;
  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;
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
        <CommentTemplate>

            <CommentContentBlock>

                <UserInfoBlock>
                    <div>
                        <BsFillPersonFill size={50} color={'#8E8E8E'} style={{
                            padding : '0.2vw',
                            boxSizing : 'border-box',
                            border: '1.5px solid #8E8E8E',
                            borderRadius: '100%'
                        }}/>
                        <div>
                            {writer}
                            <div style={{width : '100%', fontSize : '0.7vw'}}>(TEMP: {writer_score})</div>
                        </div>
                    </div>
                </UserInfoBlock>

                <div style={{width: '100%', height : 'fit-content' ,marginLeft: '1.5vw'}}>
                    <div style={{textAlign : 'right'}}>
                        {ownPost && <CommentPostActionButton backgroundColor={'#DEDEDE'} hoverColor={'#AAAAAA'} onRemove={onRemove}/> }
                    </div>

                    <CommentContent dangerouslySetInnerHTML={{__html: contents}}/>
                </div>

            </CommentContentBlock>
        </CommentTemplate>
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
