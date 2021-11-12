import React from 'react';
import {
    CommentContent,
    CommentUnitBackground,
    CommentUnitContentTemplate
} from "../../../common/post/CommentUnit";
import SupportChildcarePostActionButtons from "../support-post/SupportChildcarePostActionButtons";
import {ProfileImage, StyledWriterId, UserInfoBlock} from "../../../common/post/WriterInfo";
import Person from "../../../common/assets/005-gardener.png";
import {getExpertId, setExpertId, setOriginalPost} from "../../../../modules/childcare/childcareSupportWrite";
import {useDispatch, useSelector} from "react-redux";
import {childcareSupportRemovePost} from "../../../../lib/api/childcare/childcareSupportPosts";
import {NoListDefaultComment} from "../../../common/NoListComment";
import AcceptChildcareActionButton from "../support-post/AcceptChildcareActionButton";
import {BsFillPersonFill} from "react-icons/bs";

const SupportChildcarePostItem = ({post, expertId, writer}) => {
    const dispatch = useDispatch();
    const {applier, contents, writer_score, apply_id} = post;

    const {nick, token} = useSelector(({user}) => ({
        nick: user.userInfo.nick,
        token: user.token
    }));

    const ownPost = nick === applier;
    const ownerPost = nick === writer;

    const onEdit = () => {
        dispatch(setExpertId(expertId));
        dispatch(setOriginalPost(post));
    }

    const onRemove = async () => {
        try {
            await childcareSupportRemovePost({
                token,
                expertId,
                applyId: apply_id,
            });
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
                        {applier}
                        <div style={{width :'100%', fontSize: '0.7vw'}}>(TEMP: {writer_score})</div>
                    </StyledWriterId>
                </UserInfoBlock>

                <div style={{width: '100%', marginLeft: '1.5vw'}}>
                    {ownPost && <SupportChildcarePostActionButtons post={post} onEdit={onEdit} onRemove={onRemove}/>}
                    {ownerPost && <AcceptChildcareActionButton token={token} expertId={expertId} applyId={apply_id}/>}
                    <CommentContent dangerouslySetInnerHTML={{__html: contents}}/>
                </div>
            </CommentUnitContentTemplate>
        </CommentUnitBackground>
    )
}

const SupportChildcarePostList = ({posts, expertId, loading, error, writer}) => {
    if (error) {
        return <div>에러가 발생했습니다.</div>
    }

    return (
        <div>
            {!loading && posts && (
                posts.data.length === 0 ? (
                    <NoListDefaultComment>아직 지원한 품앗이 꾼이 없습니다.</NoListDefaultComment>
                ) : (
                    <div>
                        {posts.data.map(post => (
                            <SupportChildcarePostItem post={post} expertId={expertId} writer={writer} key={post.apply_id}/>
                        ))}
                    </div>
                )
            )}
        </div>
    );
};

export default SupportChildcarePostList;
