import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {setOriginalPost} from "../../../../modules/childcare/childcareWrite";
import {likedCancelChildCarePost, likedChildCarePost, removeChildcarePost} from "../../../../lib/api/childcarePosts";
import ChildcarePostActionButtons from "../post/ChildcarePostActionButtons";
import PostBlock from "../../../common/post/PostBlock";
import HorizontalPostWriterInfo from "../../../common/post/HorizontalPostWriterInfo";
import ActivityTime from "../../../common/ActivityTime";
import PostCreateDate from "../../../common/post/PostCreateDate";
import {IoHeartOutline, IoHeart} from "react-icons/io5";
import Modal from "../../../common/Modal";
import RectButton from "../../../common/RectButton";
import ContainerSupportChildcareEditor
    from "../../../../containers/childcare/support-write/ContainerSupportChildcareEditor";
import ContainerSupportChildcareWriteActonButtons
    from "../../../../containers/childcare/support-write/ContainerSupportChildcareWriteActonButtons";
import {getExpertId} from "../../../../modules/childcare/childcareSupportWrite";
import ContainerSupportChildcarePostList
    from "../../../../containers/childcare/support-posts/ContainerSupportChildcarePostList";


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
    const dispatch = useDispatch();
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
        end_time,
        liked_count,
        applied_count,
        apply_status,
    } = childcarePost;

    const {nick, token} = useSelector(({user}) => ({
        nick: user.userInfo.nick,
        token: user.token
    }));

    // 작성자만 수정/삭제 버튼을 볼 수 있도록 사용하는 변수
    const ownPost = nick === writer;

    const onEdit = () => {
        dispatch(setOriginalPost(childcarePost));
    }

    const onRemove = async () => {
        try {
            await removeChildcarePost(token, expert_id);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }

    const [liked, setLiked] = useState(false);
    const onLiked = async () => {
        setLiked(true);
        likedChildCarePost(token, expert_id).then(r => console.log(r));
    }
    const onLikedCancel = async () => {
        setLiked(false);
        likedCancelChildCarePost(token, expert_id).then(r => console.log(r));
    }

    const [supportModal, setSupportModal] = useState(false);

    const onSupport = () => {
        dispatch(getExpertId(childcarePost));
        setSupportModal(true);
    }

    const onClose = () => {
        setSupportModal(false);
    }


    return (
        <>
            <PostBlock type={recruit_type}>
                <StyledPostHeader>
                    <HorizontalPostWriterInfo writer={writer} review={writer_score}/>
                    {ownPost && <ChildcarePostActionButtons onEdit={onEdit} onRemove={onRemove}/> }
                </StyledPostHeader>
                <br/>

                <ActivityTime>활동 시간 : {`${start_date} ${start_time} ~ ${end_date} ${end_time}`}</ActivityTime>

                <PostContent dangerouslySetInnerHTML={{__html: contents}}/>
                <PostCreateDate createDate={created_at} fontSize={'0.8vw'}/>

                <StyledPostFooter>
                    <SeparateArea>
                        <StyledInterest>
                            지원 {applied_count}
                            &nbsp; &nbsp;
                            관심 {liked_count}
                        </StyledInterest>
                    </SeparateArea>
                    <SeparateArea>
                        {
                            liked ? (
                                <IoHeart onClick={onLikedCancel} size={'1.5vw'}
                                         color={'#FF5151'} style={{cursor: 'pointer'}}/>
                            ) : (
                                <IoHeartOutline onClick={onLiked} size={'1.5vw'}
                                                style={{cursor: 'pointer'}}/>
                            )
                        }

                        {

                            (nick === writer || apply_status === "APPLY") ? (
                                <div>
                                    <RectButton backgroundColor={"#AAAAAA"} onClick={() => setSupportModal(true)}>
                                        지원자 보기
                                    </RectButton>
                                    {
                                        supportModal &&
                                        <Modal visible={supportModal} onClose={onClose}>
                                            <ContainerSupportChildcarePostList expertId={expert_id}/>
                                        </Modal>
                                    }
                                </div>
                            ) : (
                                <div>
                                    <RectButton backgroundColor={"#FFB663"} onClick={onSupport}>지원하기</RectButton>
                                    {
                                        supportModal &&
                                        <Modal visible={supportModal} onClose={onClose}>
                                            <ContainerSupportChildcareEditor/>
                                        </Modal>
                                    }
                                </div>
                            )
                        }


                    </SeparateArea>
                </StyledPostFooter>
            </PostBlock>
        </>
    );
};


const ChildcarePostList = ({childcarePosts, loading, error}) => {
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

export default ChildcarePostList;