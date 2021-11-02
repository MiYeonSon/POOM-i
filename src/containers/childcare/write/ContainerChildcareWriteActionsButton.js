import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {updatePost, writePost} from "../../../modules/childcare/childcareWrite";
import ChildcareWriteActionButtons from "../../../components/routing-page/childcare/write/ChildcareWriteActionButtons";

const WriteActionButtonsContainer = ({history}) => {
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
        originalPostId
    } = useSelector(({childcareWrite}) => ({
        contents: childcareWrite.contents,
        recruit_type: childcareWrite.recruit_type,
        child_id: childcareWrite.child_id,
        start_date : childcareWrite.start_date,
        start_time: childcareWrite.start_time,
        end_date: childcareWrite.end_date,
        end_time : childcareWrite.end_time,
        post: childcareWrite.post,
        postError: childcareWrite.postError,
        originalPostId: childcareWrite.originalPostId
    }));

    // 포스트 등록
    const onRegister = () => {
        /*

         */

        dispatch(writePost({
                contents,
                recruit_type,
                child_id,
                start_date,
                start_time,
                end_date,
                end_time
            }),
        );

    };
    
    const onModify = () => {
        if (originalPostId) {
            dispatch(updatePost({
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
            return;
        }
    }

    const onCancel = () => {
        history.goBack();
    };

    // 성공 혹은 실패 시 할 작업
    useEffect(() => {
        if (post) {
            window.location.replace('/childcare');

        }
        if (postError) {
            console.log(postError);
        }
    }, [history, post, postError]);

    return <ChildcareWriteActionButtons onRegister={onRegister} onModify={onModify} onCancel={onCancel} isEdit={!!originalPostId}/>;

};

export default withRouter(WriteActionButtonsContainer);
