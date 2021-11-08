import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import FindClassPostActionButtons from "../post/FindClassPostActionButtons";
import PostBlock from "../../../common/post/PostBlock";
import PostCreateDate from "../../../common/post/PostCreateDate";
import Person from "../../../common/assets/005-gardener.png";
import {setOriginalPost} from "../../../../modules/poom-class/classWrite";
import {classRemovePost} from "../../../../lib/api/poom-class/classPosts";
import Modal from "../../../common/Modal";
import {getBoardId} from "../../../../modules/poom-class/classCommentWrite";
import CommentClassBlock from "../CommentClassBlock";
import {ProfileImage, StyledWriterId, UserInfoBlock} from "../../../common/post/WriterInfo";

const PostListBlock = styled.div`
  margin-top: 3rem;
`;

const PostHeaderBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.1vw;

  .time {
    margin: 0.5vh 0;
    font-size: 0.7vw;
    font-weight: 300;
    color: #AAAAAA;
  }
`;

const ContentBlock = styled.div`
  box-sizing: border-box;
  margin: 1vw 0;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostContentBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 0 1vw;
  font-size: 1vw;
`;

const PostContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  font-size: 1vw;
  font-weight: lighter;
`;

const ActivityImgBlock = styled.div`
  box-sizing: border-box;
  margin: 2vw 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  button {
    font-family: 'BMJUA';
    font-size: 4vh;
    color: #DEDEDE;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const ActivityImg = styled.img`
  box-sizing: border-box;
  width: 20%;
  height: 100%;
  border: 1px solid #DEDEDE;
`;

const CommentBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 0 1vw;
  text-align: right;
  font-size: #565656;
  font-weight: lighter;
`;

const FindClassPostItem = ({post, history}) => {
    const {title, writer, regular_meeting_day, board_id, contents, images, created_at} = post;

    const dispatch = useDispatch();
    const {token} = useSelector(({user}) => ({token: user.token}));

    const onEdit = () => {
        dispatch(setOriginalPost(post));
    };

    const onRemove = async () => {
        try {
            await classRemovePost(token, board_id);
            window.location.replace('/class');
        } catch (e) {
            console.log(e);
        }
    }

    const [commentModal, setCommentModal] = useState(false);

    const onComment = () => {
        dispatch(getBoardId(post));
        setCommentModal(true);
    }

    const onClose = () => {
        setCommentModal(false);
    }

    return (
        <PostBlock>
            <PostHeaderBlock>
                <div>
                    {title}
                    <div className={'time'}>{regular_meeting_day}</div>
                </div>
                <FindClassPostActionButtons onEdit={onEdit} onRemove={onRemove}/>
            </PostHeaderBlock>

            <ContentBlock>
                <UserInfoBlock>
                    <ProfileImage size={3} imgSrc={Person}/>
                    <StyledWriterId>{writer}</StyledWriterId>
                </UserInfoBlock>
                <PostContentBlock>
                    <PostContent dangerouslySetInnerHTML={{__html: contents}}/>
                    <PostCreateDate createDate={created_at} margin={'0'} fontSize={'0.7vw'}/>
                </PostContentBlock>
            </ContentBlock>

            <ActivityImgBlock>
                <button> &lt; </button>

                <ActivityImg src={images[0].image_uri} alt="이미지"/>
                <ActivityImg src={images[0].image_uri} alt="이미지"/>
                <ActivityImg src={images[0].image_uri} alt="이미지"/>

                <button> ></button>

            </ActivityImgBlock>

            <CommentBlock onClick={onComment}>댓글</CommentBlock>
            {commentModal &&
            <Modal visible={commentModal} onClose={onClose}>
                <CommentClassBlock boardId={board_id}/>
            </Modal>
            }

        </PostBlock>
    )
}

const FindClassPostList = ({posts, loading, error, showWriteButton, history}) => {
    if (error) {
        return <PostListBlock>에러가 발생했습니다.</PostListBlock>
    }

    return (
        <>
            {!loading && posts && (
                <div>
                    {posts.data.slice(0).reverse().map(post => (
                        <FindClassPostItem post={post} key={post.board_id} history={history}/>
                    ))}
                </div>
            )}

        </>
    )
}

export default withRouter(FindClassPostList);
