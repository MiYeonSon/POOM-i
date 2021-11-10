import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {updatePost, writePost} from "../../../modules/childcare/childcareWrite";
import ChildcareWriteActionButtons from "../../../components/routing-page/childcare/write/ChildcareWriteActionButtons";

const ContainerChildcareWriteActionsButton = ({history}) => {
    const dispatch = useDispatch();
    /*
     * useSelector Hook은 리덕스의 상태를 조회할 수 있다.
     * 사용 방법 : const 결과 = useSelector(상태 선택 함수);
     */
    const {
        contents,
        recruit_type,
        child_id,
        start_date,
        start_time,
        end_date,
        end_time,
        post,
        postError,
        originalPostId,
        token
    } = useSelector(({childcareWrite, user}) => ({
        contents: childcareWrite.contents,
        recruit_type: childcareWrite.recruit_type,
        child_id: childcareWrite.child_id,
        start_date: childcareWrite.start_date,
        start_time: childcareWrite.start_time,
        end_date: childcareWrite.end_date,
        end_time: childcareWrite.end_time,
        post: childcareWrite.post,
        postError: childcareWrite.postError,
        originalPostId: childcareWrite.originalPostId,
        token: user.token
    }));

    // 포스트 등록
    const onRegister = async () => {
        await dispatch(writePost({
                token,
                contents,
                recruit_type,
                child_id,
                start_date,
                start_time,
                end_date,
                end_time
            }),
        );

        window.location.reload();
        return;
    };

    // 포스트 수정
    const onModify = async () => {
        if (originalPostId) {
            await dispatch(updatePost({
                token,
                contents,
                recruit_type,
                child_id,
                start_date,
                start_time,
                end_date,
                end_time,
                post,
                postError,
                expert_id: originalPostId
            }))
            window.location.reload();
            return;
        }
    };


    // 성공 혹은 실패 시 할 작업
    useEffect(() => {
        if (post) {
            history.push('/childcare');
        }
        if (postError) {
            console.log(postError);
        }
    }, [history, post, postError]);

    return <ChildcareWriteActionButtons onRegister={onRegister} onModify={onModify} isEdit={!!originalPostId}/>;

};

export default withRouter(ContainerChildcareWriteActionsButton);
