import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as postsAPI from '../lib/api/expertPosts';
import {takeLatest} from "redux-saga/effects";

const [
    EXPERT_LIST_POSTS,
    EXPERT_LIST_POSTS_SUCCESS,
    EXPERT_LIST_POSTS_FAILURE
] = createRequestActionTypes('expertPosts/EXPERT_LIST_POSTS');

export const expertListPosts = createAction(EXPERT_LIST_POSTS);

const expertListPostSaga = createRequestSaga(EXPERT_LIST_POSTS, postsAPI.expertListPosts);

export function* expertPostsSaga() {
    yield takeLatest(EXPERT_LIST_POSTS, expertListPostSaga);
}

const initialState = {
    expertPosts: null,
    error: null
};

const expertPosts = handleActions(
    {
        [EXPERT_LIST_POSTS_SUCCESS] : (state, {payload : expertPosts}) =>  ({
            ...state,
            expertPosts,
        }),
        [EXPERT_LIST_POSTS_FAILURE] : (state, {payload : error}) => ({
            ...state,
            error
        }),
    },
    initialState
);

export default expertPosts;