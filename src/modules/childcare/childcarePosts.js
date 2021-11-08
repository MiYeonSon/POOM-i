import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as postsAPI from '../../lib/api/childcare/childcarePosts';
import {takeLatest} from "redux-saga/effects";

const [
    LIST_POSTS,
    LIST_POSTS_SUCCESS,
    LIST_POSTS_FAILURE
] = createRequestActionTypes('childcarePosts/LIST_POSTS');

export const childcareListPosts = createAction(LIST_POSTS);

const childcareListPostSaga = createRequestSaga(LIST_POSTS, postsAPI.childcareListPosts);

export function* childcarePostsSaga() {
    yield takeLatest(LIST_POSTS, childcareListPostSaga);
}

const initialState = {
    posts: null,
    error: null
};

const childcarePosts = handleActions(
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

export default childcarePosts;