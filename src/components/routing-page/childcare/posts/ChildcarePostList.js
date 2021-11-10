import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {setOriginalPost} from "../../../../modules/childcare/childcareWrite";
import {
    likedCancelChildCarePost,
    likedChildCarePost,
    removeChildcarePost
} from "../../../../lib/api/childcare/childcarePosts";
import ChildcarePostActionButtons from "../post/ChildcarePostActionButtons";
import PostItem from "../../../common/post/PostItem";
import HorizontalPostWriterInfo from "../../../common/user-info/HorizontalPostWriterInfo";
import UnderlinedDivision from "../../../common/UnderlinedDivision";
import {IoHeartOutline, IoHeart} from "react-icons/io5";
import Modal from "../../../common/Modal";
import RectButton from "../../../common/RectButton";
import ContainerSupportChildcareEditor
    from "../../../../containers/childcare/support-write/ContainerSupportChildcareEditor";
import {getExpertId} from "../../../../modules/childcare/childcareSupportWrite";
import ContainerSupportChildcarePostList
    from "../../../../containers/childcare/support-posts/ContainerSupportChildcarePostList";
import {PostContent, PostCreateDate} from "../../../common/post/PostInfo";


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


const CloseBlock = styled.div`
  .close {
    box-sizing: border-box;
    background-color: red;
  }
`;

// TODO : 좋아요 시 새로고침 X 좋아요 수 변화시키기
const ChildcarePostItem = ({childcarePost}) => {
    const dispatch = useDispatch();
    const {
        created_at,
        writer,
        contents,
        writer_score,
        recruit_type,
        recruitment_status,
        expert_id,
        start_date,
        start_time,
        end_date,
        end_time,
        liked_count,
        applied_count,
        apply_status,
        like_status
    } = childcarePost;

    const {nick, token} = useSelector(({user}) => ({
        nick: user.userInfo.nick,
        token: user.token
    }));

    // 작성자만 수정/삭제 버튼을 볼 수 있도록 사용하는 변수
    const ownPost = nick === writer;

    // 품앗이 꾼 포스트 수정 함수
    const onEdit = () => {
        dispatch(setOriginalPost(childcarePost));
    }

    // 품앗이 꾼 포스트 삭제 함수
    const onRemove = async () => {
        try {
            await removeChildcarePost(token, expert_id);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }

    // 품앗이 꾼 포스트 좋아요 구현 부분
    const [liked, setLiked] = useState(false);

    // Redux를 사용하지 않고 api를 요청하는 함수를 호출하는 방식으로 구현함.
    const onLiked = async () => {
        setLiked(true);
        likedChildCarePost(token, expert_id).then(r => {
        });
    }
    const onLikedCancel = async () => {
        setLiked(false);
        likedCancelChildCarePost(token, expert_id).then(r => {
        });
    }

    // 품앗이 꾼 지원 및 확인 할 수 있는 Modal 창 구현
    const [supportModal, setSupportModal] = useState(false);
    const onSupport = () => {
        dispatch(getExpertId(childcarePost));
        setSupportModal(true);
    }

    const onClose = () => {
        setSupportModal(false);
    }

    useEffect(() => {
        console.log('test')
    }, [liked_count]);

    return (
        <>
            <PostItem type={recruit_type}>
                <StyledPostHeader>
                    <HorizontalPostWriterInfo user={writer} review={writer_score}/>
                    {ownPost && <ChildcarePostActionButtons onEdit={onEdit} onRemove={onRemove}/>}
                </StyledPostHeader>
                <br/>

                <UnderlinedDivision>활동 시간
                    : {`${start_date} ${start_time} ~ ${end_date} ${end_time}`}</UnderlinedDivision>

                <PostContent dangerouslySetInnerHTML={{__html: contents}}/>
                <PostCreateDate>작성일 : {created_at}</PostCreateDate>

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
                            liked || like_status === 'LIKE' ? (
                                <IoHeart onClick={onLikedCancel} size={'1.5vw'}
                                         color={'#FF5151'} style={{cursor: 'pointer'}}/>
                            ) : (
                                <IoHeartOutline onClick={onLiked} size={'1.5vw'}
                                                style={{cursor: 'pointer'}}/>
                            )
                        }

                        {recruitment_status === 'CLOSED' ? (
                            <RectButton backgroundColor={"#AAAAAA"}>매칭 완료</RectButton>
                        ) : (
                            (nick === writer || apply_status === "APPLY") ? (
                                <div>
                                    <RectButton backgroundColor={"#AAAAAA"} onClick={() => setSupportModal(true)}>
                                        지원자 보기
                                    </RectButton>
                                    {
                                        supportModal &&
                                        <Modal visible={supportModal} onClose={onClose}>
                                            <ContainerSupportChildcarePostList writer={writer}
                                                                               expertId={expert_id}/>
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

                        )}
                    </SeparateArea>
                </StyledPostFooter>
            </PostItem>
        </>
    );
};


const ChildcarePostList = ({childcarePosts, loading, error}) => {
    if (error) {
        console.log(error);

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