import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import * as postsAPI from '../../lib/api/childcareSupportPosts';
import {takeLatest} from "redux-saga/effects";

const INITIALIZE = 'childcareSupportWrite/INITIALIZE';
const CHANGE_FIELD = 'childcareSupportWrite/CHANGE_FIELD';

const GET_EXPERT_ID = 'childcareSupportWrite/GET_EXPERT_ID';

const [
    WRITE_POST,
    WRITE_POST_SUCCESS,
    WRITE_POST_FAILURE
] = createRequestActionTypes('childcareSupportWrite/WRITE_POST');


export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({key, value}));

export const getExpertId = createAction(GET_EXPERT_ID, post => post);


export const writePost = createAction(WRITE_POST, ({token, expertId, childId, contents}) => ({
    token,
    expertId,
    childId,
    contents
}));

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.childcareSupportWritePost);
export function* childcareSupportWriteSaga(){
    yield takeLatest(WRITE_POST, writePostSaga);
}


const initialState = {
    childId: null,
    contents: null,
    expertId : null,
    post : null,
    postError : null,
    error : null
};

const childcareSupportWrite = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value
        }),
        [GET_EXPERT_ID] : (state, {payload : post}) =>({
           ...state,
           expertId : post.expert_id
        }),
        [WRITE_POST] : state => ({
            ...state,
            post : null,
            postError: null
        }),
        [WRITE_POST_SUCCESS] : (state, {payload : post}) => ({
            ...state,
            post,
        }),
        [WRITE_POST_FAILURE] : (state, {payload : postError}) => ({
            ...state,
            postError,
        })
    },
    initialState
);

export default childcareSupportWrite;



