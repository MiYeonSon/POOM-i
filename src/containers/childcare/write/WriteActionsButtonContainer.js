import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {updatePost, writePost} from "../../../modules/childcare/expertWrite";
import WriteActionButtons from "../../../components/childcare/write/WriteActionButtons";

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
    } = useSelector(({write}) => ({
        contents: write.contents,
        recruit_type: write.recruit_type,
        child_id: write.child_id,
        start_date : write.start_date,
        start_time: write.start_time,
        end_date: write.end_date,
        end_time : write.end_time,
        post: write.post,
        postError: write.postError,
        originalPostId: write.originalPostId
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

    return <WriteActionButtons onRegister={onRegister} onModify={onModify} onCancel={onCancel} isEdit={!!originalPostId}/>;

};

export default withRouter(WriteActionButtonsContainer);
