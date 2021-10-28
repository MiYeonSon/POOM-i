import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import * as postsAPI from '../../lib/api/classPosts';
import {takeLatest} from "redux-saga/effects";

const INITIALIZE = 'classWrite/INITIALIZE'; // 모든 내용 초기화

const CHANGE_FIELD = 'classWrite/CHANGE_FIELD'; // 특정 key 값 바꾸기

const [
    WRITE_POST,
    WRITE_POST_SUCCESS,
    WRITE_POST_FAILURE,
] = createRequestActionTypes('classWrite/WRITE_POST'); // 포스트 작성

const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST';

const [
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE
] = createRequestActionTypes('classWrite/UPDATE_POST');

export const initialize = createAction(INITIALIZE);

export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({
    key,
    value,
}));

export const classWritePost = createAction(WRITE_POST,
    ({
         groupId,
         contents,
         images
     }) => ({
        groupId,
        contents,
        images
    }));

export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post);

export const classUpdatePost = createAction(
    UPDATE_POST,
    ({groupId, contents, remove_images, images, originalPostId}) => ({
        groupId, contents, remove_images, images, originalPostId
    })
);

// saga 생성
const classWritePostSaga = createRequestSaga(WRITE_POST, postsAPI.classWritePost);
const classUpdatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.classUpdatePost);

export function* classWriteSaga() {
    yield takeLatest(WRITE_POST, classWritePostSaga);
    yield takeLatest(UPDATE_POST, classUpdatePostSaga);
}

const initialState = {
    groupId: '',
    contents: '',
    images: '',
    post: null,
    postError: null,
    remove_images : null,
    originalPostId: null
};

const classWrite = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
        [CHANGE_FIELD]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value, // 특정 key 값을 업데이트
        }),
        [WRITE_POST]: state => ({
            ...state,
            // post와 postError를 초기화
            post: null,
            postError: null,
        }),
        // 포스트 작성 성공
        [WRITE_POST_SUCCESS]: (state, {payload: post}) => ({
            ...state,
            post,
        }),
        // 포스트 작성 실패
        [WRITE_POST_FAILURE]: (state, {payload: postError}) => ({
            ...state,
            postError,
        }),
        [SET_ORIGINAL_POST]: (state, {payload: post}) => ({
            ...state,
            groupId: post.group_id,
            contents: post.contents,
            remove_images: post.images,
            originalPostId: post.board_id
        }),
        [UPDATE_POST_SUCCESS]: (state, {payload: post}) => ({
            ...state,
            post
        }),
        [UPDATE_POST_FAILURE]: (state, {payload: postError}) => ({
            ...state,
            postError
        })
    },
    initialState,
);


export default classWrite;