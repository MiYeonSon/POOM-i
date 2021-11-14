import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import FindClassPostActionButtons from "../post/FindClassPostActionButtons";
import PostItemTemplate from "../../../common/post/PostItemTemplate";
import {setOriginalPost} from "../../../../modules/poom-class/classWrite";
import {classRemovePost} from "../../../../lib/api/poom-class/classPosts";
import Modal from "../../../common/Modal";
import {getBoardId} from "../../../../modules/poom-class/classCommentWrite";
import CommentClassBlock from "../CommentClassBlock";
import {UserInfoBlock} from "../../../common/post/WriterInfo";
import {PostContent, PostCreateDate} from "../../../common/post/PostInfo";
import RectButton from "../../../common/RectButton";
import ContainerJoinPoomClassInfos from "../../../../containers/mypage/myActivity/ContainerJoinPoomClassInfos";
import {BsFillPersonFill} from "react-icons/bs";
import ContainerApplyPoomClassEditor from "../../../../containers/mypage/myActivity/ContainerApplyPoomClassEditor";
import ContainerApplyActionButton from "../../../../containers/mypage/myActivity/ContainerApplyActionButton";

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

const PoomClassInfo = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  display: flex;
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
  width: 50%;
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
    const {
        title,
        writer,
        regular_meeting_day,
        recruitment_status,
        board_id,
        group_id,
        contents,
        images,
        created_at
    } = post;

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

    // 품앗이 반 참여 지원 모달 관련
    const [classInfoModal, setClassInfoModal] = useState(false);
    const [supportModal, setSupportModal] = useState(false);

    const controlModal = () => {
        console.log('click');
        setClassInfoModal(false);
        setSupportModal(true);
    }

    return (
        <PostItemTemplate>
            <PostHeaderBlock>
                <PoomClassInfo>
                    <div>
                        {title}
                        <div className={'time'}>{regular_meeting_day}</div>
                    </div>
                    {recruitment_status === 'RECRUITING' && <RectButton backgroundColor={'#FFB663'}
                                                                        onClick={() => setClassInfoModal(!classInfoModal)}>모집중</RectButton>}
                    {
                        classInfoModal &&
                        <Modal width={'34vw'} visible={classInfoModal} onClose={() => setClassInfoModal(false)}>
                            <ContainerJoinPoomClassInfos groupId={group_id}/>
                            <div style={{width: '100%', marginTop: '0.5vw', textAlign: 'right'}}>
                                <RectButton backgroundColor={'#FFB663'} onClick={controlModal}>지원하기</RectButton>
                            </div>
                        </Modal>
                    }
                    {
                        supportModal &&
                        <Modal visible={supportModal} onClose={() => setSupportModal(false)}>
                            <ContainerApplyPoomClassEditor />
                            <div style={{width: '100%', marginTop: '0.5vw', textAlign: 'right'}}>
                            <ContainerApplyActionButton onClose={()=>setSupportModal(false)} groupId={group_id}/>
                            </div>
                        </Modal>
                    }

                </PoomClassInfo>

                <FindClassPostActionButtons onEdit={onEdit} onRemove={onRemove}/>
            </PostHeaderBlock>

            <ContentBlock>
                <UserInfoBlock>
                    <BsFillPersonFill size={60} color={'#8E8E8E'} style={{
                        padding: '0.2vw',
                        boxSizing: 'border-box',
                        border: '1.5px solid #8E8E8E',
                        borderRadius: '100%'
                    }}/>
                    <div>{writer}</div>
                </UserInfoBlock>
                <PostContentBlock>
                    <PostContent dangerouslySetInnerHTML={{__html: contents}}/>
                    <PostCreateDate margin={'0vw'}>작성일 : {created_at}</PostCreateDate>
                </PostContentBlock>
            </ContentBlock>

            <ActivityImgBlock>
                <button> &lt; </button>

                <ActivityImg src={images[0].image_uri} alt="이미지"/>

                <button> ></button>

            </ActivityImgBlock>

            <CommentBlock onClick={onComment}>댓글</CommentBlock>
            {commentModal &&
            <Modal visible={commentModal} onClose={onClose}>
                <CommentClassBlock boardId={board_id}/>
            </Modal>
            }

        </PostItemTemplate>
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
