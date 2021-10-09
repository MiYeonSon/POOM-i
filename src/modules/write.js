// modules 디렉토리는 리덕스 모듈 디렉토리
// write는 글쓰기 관련 상태를 리덕스로 관리해주는 리덕스 모듈

import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import * as postsAPI from '../lib/api/findRearingPosts';
import {takeLatest} from "redux-saga/effects";


// 액션 타입 정의
const INITIALIZE = 'write/INITIALIZE';  // 모든 내용 초기화
const CHANGE_FILED = 'write/CHANGE_FIELD';  // 특정 key 값 바꾸기

// POST 시 요청 후 상태에 대한 액션 타입 정의
const [
    WRITE_POST,
    WRITE_POST_SUCCESS,
    WRITE_POST_FAILURE
] = createRequestActionTypes('write/WRITE_POST');


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
export const writePost = createAction(WRITE_POST, ({
                                                       body,
                                                       is_recurit,
                                                       child_id,
                                                       start_date,
                                                       start_time,
                                                       end_date,
                                                       end_time
                                                   }) => ({
    body,
    is_recurit,
    child_id,
    start_date,
    start_time,
    end_date,
    end_time
}));

// 사가 생성
export const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);

export function* writeSaga() {
    yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState = {
    body: '',
    is_recurit: '',
    child_id: null,
    start_date: '',
    start_time: '',
    end_date: '',
    end_time: '',
    post : null,
    postError : null
};

// handleActions를 활용하여 리듀서 함수를 만들 수 있으며,
// 함수의 첫 번째 파라미터에는 각 액션에 대한 업데이트 함수를 넣어주고
// 두 번째 파라미터에는 초기 상태를 넣어준다.
/*
 * 리듀서 함수는 변화를 일으키는 함수로,
 * 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아 온다. 그 후 두 값을 참고하여 새로운 상태를 만들어서 반환해준다.
 */
const write = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FILED]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value
        }),
        [WRITE_POST] : state => ({
            ...state,
            post :null,
            postError: null
        }),
        [WRITE_POST_SUCCESS] : (state, {payload : post}) => ({
            ...state,
            post,
        }),
        [WRITE_POST_FAILURE] : (state, {payload : postError}) => ({
            ...state,
            postError
        })
    },
    initialState
)

export default write;
