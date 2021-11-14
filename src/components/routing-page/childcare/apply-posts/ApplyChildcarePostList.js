import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    CommentContent,
    CommentTemplate,
    ApplyCommentContentBlock
} from "../../../common/post/CommentUnit";
import ApplyChildcarePostActionButtons from "../apply-post/ApplyChildcarePostActionButtons";
import {setExpertId, setOriginalPost} from "../../../../modules/childcare/childcareApplyWrite";
import {childcareSupportRemovePost} from "../../../../lib/api/childcare/childcareSupportPosts";
import {NoListDefaultComment} from "../../../common/NoListComment";
import AcceptApplyChildcareActionButton from "../apply-post/AcceptApplyChildcareActionButton";
import VerticalUserInfo from "../../../common/user-info/VerticalUserInfo";

const ApplyChildcarePostItem = ({post, expertId, writer}) => {
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
        <CommentTemplate>
            <ApplyCommentContentBlock>
                <div>
                    <VerticalUserInfo nick={applier} score={writer_score} />
                </div>

                <div style={{width: '100%', marginLeft: '1.5vw'}}>
                    <CommentContent dangerouslySetInnerHTML={{__html: contents}}/>
                </div>

                <div style={{boxSizing : 'border-box', width : '10vw', height : '9vh', margin : '0vw'}}>
                    {ownPost && <ApplyChildcarePostActionButtons post={post} onEdit={onEdit} onRemove={onRemove}/> }
                    {ownerPost && <AcceptApplyChildcareActionButton token={token} expertId={expertId} applyId={apply_id}/> }
                </div>
            </ApplyCommentContentBlock>
        </CommentTemplate>
    )
}

const ApplyChildcarePostList = ({posts, expertId, loading, error, writer}) => {
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
                            <ApplyChildcarePostItem post={post} expertId={expertId} writer={writer} key={post.apply_id}/>
                        ))}
                    </div>
                )
            )}
        </div>
    );
};

export default ApplyChildcarePostList;
