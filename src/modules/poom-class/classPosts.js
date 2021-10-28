import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import * as postsAPI from '../../lib/api/classPosts';
import {takeLatest} from "redux-saga/effects";

const [
    LIST_POSTS,
    LIST_POSTS_SUCCESS,
    LIST_POSTS_FAILURE
] = createRequestActionTypes('classPosts/LIST_POSTS');

export const classListPosts = createAction(LIST_POSTS);

const classListPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.classListPosts);

export function* classPostsSaga() {
    yield takeLatest(LIST_POSTS, classListPostsSaga);
}

const initialState = {
    posts: null,
    error: null
};

const classPosts = handleActions(
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

export default classPosts;