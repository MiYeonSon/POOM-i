import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import {takeLatest} from "redux-saga/effects";
import * as postsAPI from '../../lib/api/classsCommentPosts';

const INITIALIZE = 'classCommentWrite/INITIALIZE';
const CHANGE_FIELD = 'classCommentWrite/CHANGE_FILED';

const GET_BOARD_ID = 'classCommentWrite/GET_BOARD_ID';

const [
    WRITE_POST,
    WRITE_POST_SUCCESS,
    WRITE_POST_FAILURE
] = createRequestActionTypes('classCommentWrite/WRITE_POST');


export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({
    key,
    value
}));

export const getBoardId = createAction(GET_BOARD_ID, post => post);

export const writePost = createAction(WRITE_POST, ({boardId, contents}) => ({
    boardId,
    contents
}));

const classCommentWritePostSaga = createRequestSaga(WRITE_POST, postsAPI.classCommentWritePost);

export function* classCommentWriteSaga(){
    yield takeLatest(WRITE_POST, classCommentWritePostSaga);
}


const initialState = {
    boardId : '',
    contents: '',
    post : null,
    postError : null
};

const classCommentWrite = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value
        }),
        [GET_BOARD_ID] : (state, {payload : post}) => ({
            ...state,
            boardId: post.board_id
        }),
        [WRITE_POST] : state => ({
            ...state,
            post : null,
            postError : null
        }),
        [WRITE_POST_SUCCESS] : (state, {payload : post}) => ({
            ...state,
            post
        }),
        [WRITE_POST_FAILURE] : (state, {payload : postError}) => ({
            ...state,
            postError
        })

    },
    initialState
);

export default classCommentWrite;