import React from 'react';
import {
    CommentContent,
    CommentUnitBackground,
    CommentUnitContentTemplate
} from "../../../common/post/CommentUnit";
import SupportChildcarePostActionButtons from "../support-post/SupportChildcarePostActionButtons";
import {ProfileImage, StyledWriterId, UserInfoBlock} from "../../../common/post/WriterInfo";
import Person from "../../../common/assets/005-gardener.png";
import {setOriginalPost} from "../../../../modules/childcare/childcareSupportWrite";
import {useDispatch, useSelector} from "react-redux";
import {childcareSupportRemovePost} from "../../../../lib/api/childcare/childcareSupportPosts";
import {withRouter} from "react-router-dom";
import {NoListComment} from "../../../common/NoListComment";

const SupportChildcarePostItem = ({history, post, expertId}) => {
    const dispatch = useDispatch();
    const {applier, contents, writer_score, apply_id} = post;

    const {nick, token} = useSelector(({user}) => ({
        nick: user.userInfo.nick,
        token: user.token
    }));

    const ownPost = nick === applier;

    const onEdit = () => {
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
                    <ProfileImage size={2.5} imgSrc={Person}/>
                    <StyledWriterId>
                        {applier}
                        <div style={{width :'100%', fontSize: '0.7vw'}}>(TEMP: {writer_score})</div>
                    </StyledWriterId>
                </UserInfoBlock>

                <div style={{width: '100%', marginLeft: '1.5vw'}}>
                    {ownPost && <SupportChildcarePostActionButtons post={post} onEdit={onEdit} onRemove={onRemove}/>}

                    <CommentContent dangerouslySetInnerHTML={{__html: contents}}/>
                </div>
            </CommentUnitContentTemplate>
        </CommentUnitBackground>
    )
}

const SupportChildcarePostList = ({posts, expertId, loading, error}) => {
    if (error) {
        return <div>에러가 발생했습니다.</div>
    }

    return (
        <div>
            {!loading && posts && (
                posts.data.length === 0 ? (
                    <NoListComment>아직 지원한 품앗이 꾼이 없습니다.</NoListComment>
                ) : (
                    <div>
                        {posts.data.map(post => (
                            <SupportChildcarePostItem post={post} expertId={expertId} key={post.apply_id}/>
                        ))}
                    </div>
                )
            )}
        </div>
    );
};

export default withRouter(SupportChildcarePostList);
