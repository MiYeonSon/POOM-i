import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import * as postsAPI from '../../lib/api/childcare/childcareSupportPosts';
import {takeLatest} from "redux-saga/effects";

const INITIALIZE = 'childcareSupportWrite/INITIALIZE';
const CHANGE_FIELD = 'childcareSupportWrite/CHANGE_FIELD';

const GET_EXPERT_ID = 'childcareSupportWrite/GET_EXPERT_ID';

const [
    WRITE_POST,
    WRITE_POST_SUCCESS,
    WRITE_POST_FAILURE
] = createRequestActionTypes('childcareSupportWrite/WRITE_POST');

const SET_ORIGINAL_POST = 'childcareSupportWrite/SET_ORIGINAL_POST';
const SET_EXPERT_ID = 'childcareSupportWrite/SET_EXPERT_ID';

const [
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE
] = createRequestActionTypes('childcareSupportWrite/UPDATE_POST');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({key, value}));

export const getExpertId = createAction(GET_EXPERT_ID, post => post);


export const writePost = createAction(WRITE_POST, ({token, expertId, childId, contents}) => ({
    token,
    expertId,
    childId,
    contents
}));

export const setOriginalPost = createAction(SET_ORIGINAL_POST, (post) => (post));
export const setExpertId = createAction(SET_EXPERT_ID, (expertId) => (expertId));

export const updatePost = createAction(
    UPDATE_POST,
    ({
         token,
         expertId,
         applyId,
         contents,
         childId
     }) => ({
        token,
        expertId,
        applyId,
        contents,
        childId
    })
);

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.childcareSupportWritePost);
const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.childcareSupportUpdatePost);

export function* childcareSupportWriteSaga() {
    yield takeLatest(WRITE_POST, writePostSaga);
    yield takeLatest(UPDATE_POST, updatePostSaga);
}

const initialState = {
    childId: null,
    contents: null,
    expertId: null,
    post: null,
    postError: null,
    originalPostId: null
};

const childcareSupportWrite = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value
        }),
        [GET_EXPERT_ID]: (state, {payload: post}) => ({
            ...state,
            expertId: post.expert_id
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
            postError,
        }),
        [SET_ORIGINAL_POST]: (state, {payload: post}) => ({
            ...state,
            childId: post.child_id,
            contents: post.contents,
            originalPostId: post.apply_id
        }),
        [SET_EXPERT_ID] : (state, {payload : expertId}) => ({
           ...state,
           expertId : expertId
        }),
        [UPDATE_POST_SUCCESS] : (state, {payload : post}) =>({
            ...state,
            post
        }),
        [UPDATE_POST_FAILURE] : (state, {payload : postError}) => ({
            ...state,
            postError
        })
    },
    initialState
);

export default childcareSupportWrite;



