// modules 디렉토리는 리덕스 모듈 디렉토리
// write는 글쓰기 관련 상태를 리덕스로 관리해주는 리덕스 모듈

import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import * as postsAPI from '../../lib/api/childcare/childcarePosts';
import {takeLatest} from "redux-saga/effects";


// 액션 타입 정의
const INITIALIZE = 'childcareWrite/INITIALIZE';  // 모든 내용 초기화
const CHANGE_FILED = 'childcareWrite/CHANGE_FIELD';  // 특정 key 값 바꾸기
const SET_ORIGINAL_POST = 'childcareWrite/SET_ORIGINAL_POST';// 수정 시 post 상태를 write로 복사

// POST 시 요청 후 상태에 대한 액션 타입 정의
const [
    WRITE_POST,
    WRITE_POST_SUCCESS,
    WRITE_POST_FAILURE
] = createRequestActionTypes('childcareWrite/WRITE_POST');

// PATCH 시 요청 후 상태에 대한 액션 타입 정의

const [
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE
] = createRequestActionTypes('childcareWrite/UPDATE_POST');




// createAction을 사용하면 매번 객체를 직접 만들어줄 필요 없기 간단하게 액션 생성 함수를 선언할 수 있음.
// 액션에 필요한 데이터들은 두 번째 파라미터인 payload에 넣어준다.
/*
 * 액션 생성 함수란 액션 객체를 만들어 주는 함수로,
 * 액션 이름을 사용하여 액션 객체를 만든다.
 */
export const initialize = createAction(INITIALIZE);

// 여기서는 key, value가 액션에 필요한 추가 데이터인 payload
export const changeField = createAction(CHANGE_FILED, ({key, value}) => ({
    key,
    value
}));

export const writePost = createAction(WRITE_POST,
    ({
         token,
         contents,
         recruit_type,
         child_id,
         start_date,
         start_time,
         end_date,
         end_time
     }) => ({
        token,
        contents,
        recruit_type,
        child_id,
        start_date,
        start_time,
        end_date,
        end_time
    }));

export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post);

export const updatePost = createAction(UPDATE_POST,
    (
        {
            token,
            expert_id,
            contents,
            recruit_type,
            child_id,
            start_date,
            start_time,
            end_date,
            end_time
        }) => (
        {
            token,
            expert_id,
            contents,
            recruit_type,
            child_id,
            start_date,
            start_time,
            end_date,
            end_time
        })
);



// 사가 생성
export const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writeChildcarePost);
export const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updateChildcarePost);

export function* writeSaga() {
    yield takeLatest(WRITE_POST, writePostSaga);
    yield takeLatest(UPDATE_POST, updatePostSaga);
}

const initialState = {
    contents: '',
    recruit_type: '',
    child_id: 'null',
    start_date: '',
    start_time: '',
    end_date: '',
    end_time: '',
    post: null,
    postError: null,
    originalPostId: null
};

// handleActions를 활용하여 리듀서 함수를 만들 수 있으며,
// 함수의 첫 번째 파라미터에는 각 액션에 대한 업데이트 함수를 넣어주고
// 두 번째 파라미터에는 초기 상태를 넣어준다.
/*
 * 리듀서 함수는 변화를 일으키는 함수로,
 * 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아 온다. 그 후 두 값을 참고하여 새로운 상태를 만들어서 반환해준다.
 */
const childcareWrite = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FILED]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value
        }),
        [WRITE_POST]: state => ({
            ...state,
            post: null,
            postError: null
        }),
        [WRITE_POST_SUCCESS]: (state, {payload: post}) => ({
            ...state,
            post,
        }),
        [WRITE_POST_FAILURE]: (state, {payload: postError}) => ({
            ...state,
            postError
        }),
        [SET_ORIGINAL_POST]: (state, {payload: post}) => ({
            ...state,
            contents: post.contents,
            recruit_type: post.recruit_type,
            child_id: post.child_id,
            start_date: post.start_date,
            start_time: post.start_time,
            end_date: post.end_date,
            end_time: post.end_time,
            originalPostId: post.expert_id,
            childList : post.childList,
        }),
        [UPDATE_POST_SUCCESS]: (state, {payload: post}) => ({
            ...state,
            post
        }),
        [UPDATE_POST_FAILURE]: (state, {payload: postError}) => ({
            ...state,
            postError
        }),

    },
    initialState
)

export default childcareWrite;
