import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {writePost} from "../../modules/write";
import WriteActionButtons from "../../components/findRearing/write/WriteActionButtons";

const WriteActionButtonsContainer = ({history}) => {
    const dispatch = useDispatch();
    /*
     * useSelector Hook은 리덕스의 상태를 조회할 수 있다.
     * 사용 방법 : const 결과 = useSelector(상태 선택 함수);
     */
    const {
        body,
        is_recurit,
        child_id,
        start_date,
        start_time,
        end_date,
        end_time,
        post,
        postError
    } = useSelector(({write}) => ({
        body: write.body,
        is_recurit: write.is_recurit,
        child_id: write.child_id,
        start_date: write.start_date,
        start_time: write.start_time,
        end_date: write.end_date,
        end_time: write.end_time,
        post: write.post,
        postError: write.postError
    }));

    // 포스트 등록
    const onPublish = () => {
        dispatch(writePost({
                body,
                is_recurit,
                child_id,
                start_date,
                start_time,
                end_date,
                end_time
            }),
        );
    };

    const onCancel = () => {
        history.goBack();
    };

    // 성공 혹은 실패 시 할 작업
    useEffect(() => {
        if (post) {
            console.log('success');
        }
        if (postError) {
            console.log(postError);
        }
    }, [history, post, postError]);

    return <WriteActionButtons onPublish={onPublish} onCancel={onCancel}/>;

};

export default withRouter(WriteActionButtonsContainer);
