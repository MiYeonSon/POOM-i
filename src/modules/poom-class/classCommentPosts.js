import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import * as postsAPI from '../../lib/api/classCommentPosts';
import {takeLatest} from "redux-saga/effects";

const [
    LIST_POSTS,
    LIST_POSTS_SUCCESS,
    LIST_POSTS_FAILURE
] = createRequestActionTypes('classCommentPosts/LIST_POSTS');

export const classCommentListPosts = createAction(LIST_POSTS);

const classCommentListPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.classCommentListPosts);

export function* classCommentPostsSaga() {
    yield takeLatest(LIST_POSTS, classCommentListPostsSaga);
}

const initialState = {
    posts: null,
    error: null
};

const classCommentPosts = handleActions(
    {
        [LIST_POSTS_SUCCESS]: (state, {payload: posts}) => ({
            ...state,
            posts
        }),
        [LIST_POSTS_FAILURE]: (state, {payload: error}) => ({
            ...state,
            error
        })
    },
    initialState
);

export default classCommentPosts;