import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as postsAPI from "../../lib/api/childcareSupportPosts";
import {takeLatest} from "redux-saga/effects";

const [
    LIST_POSTS,
    LIST_POSTS_SUCCESS,
    LIST_POSTS_FAILURE
] = createRequestActionTypes('childcareSupportPosts/LIST_POSTS');

export const childcareSupportListPosts = createAction(LIST_POSTS);

const childcareSupportListPostSaga = createRequestSaga(LIST_POSTS, postsAPI.childcareSupportListPosts);

export function* childcareSupportPostsSaga() {
    yield takeLatest(LIST_POSTS, childcareSupportListPostSaga);
}

const initialState = {
    posts: null,
    error: null
};

const childcareSupportPosts = handleActions(
    {
        [LIST_POSTS_SUCCESS] : (state, {payload : posts}) =>  ({
            ...state,
            posts,
        }),
        [LIST_POSTS_FAILURE] : (state, {payload : error}) => ({
            ...state,
            error
        }),
    },
    initialState
);

export default childcareSupportPosts;