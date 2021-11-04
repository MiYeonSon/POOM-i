import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as postsAPI from "../../lib/api/detailInfo";
import {takeLatest} from "redux-saga/effects";

const [
    GET_CHILD_LIST,
    GET_CHILD_LIST_SUCCESS,
    GET_CHILD_LIST_FAILURE
] = createRequestActionTypes('detailInfo/GET_CHILD_LIST');

const [
    GET_CLASS_LIST,
    GET_CLASS_LIST_SUCCESS,
    GET_CLASS_LIST_FAILURE
] = createRequestActionTypes('detailInfo/GET_CLASS_LIST');

export const getChildList = createAction(GET_CHILD_LIST);
export const getClassList = createAction(GET_CLASS_LIST);

export const childListSaga = createRequestSaga(GET_CHILD_LIST, postsAPI.getChildList);
export const classListSaga = createRequestSaga(GET_CLASS_LIST, postsAPI.getClassList);


export function* getDetailInfoSaga() {
    yield takeLatest(GET_CHILD_LIST, childListSaga);
    yield takeLatest(GET_CLASS_LIST, classListSaga);
}

const initialState = {
    childList : null,
    childListError : null,
    classList : null,
    classListError : null
};

const detailInfo = handleActions(
    {
        [GET_CHILD_LIST] : state => ({
            ...state,
            childList : null,
            childListError: null
        }),
        [GET_CHILD_LIST_SUCCESS] : (state, {payload : childList}) => ({
            ...state,
            childList
        }),
        [GET_CHILD_LIST_FAILURE] : (state, {payload : childListError}) => ({
            ...state,
            childListError
        }),
        [GET_CLASS_LIST] : state => ({
            ...state,
            classList : null,
            classListError : null
        }),
        [GET_CLASS_LIST_SUCCESS] : (state, {payload : classList}) => ({
            ...state,
            classList
        }),
        [GET_CLASS_LIST_FAILURE] : (state, {payload : classListError}) => ({
            ...state,
            classListError
        })
    },
    initialState
);

export default detailInfo;