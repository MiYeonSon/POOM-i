import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as actionClassAPI from "../../lib/api/mypage/actionPoomClass";
import {takeLatest} from "redux-saga/effects";
import {createClassSaga, readClassSaga} from "./actionPoomClass";

const INITIALIZE = 'applyPoomClass/INITIALIZE';  // 모든 내용 초기화
const CHANGE_FILED = 'applyPoomClass/CHANGE_FIELD';  // 특정 key 값 바꾸기

const [
    APPLY_CLASS,
    APPLY_CLASS_SUCCESS,
    APPLY_CLASS_FAILURE
] = createRequestActionTypes('actionPoomClass/APPLY_CLASS');

export const initialize = createAction(INITIALIZE);

// 여기서는 key, value가 액션에 필요한 추가 데이터인 payload
export const changeField = createAction(CHANGE_FILED, ({key, value}) => ({
    key,
    value
}));

export const applyClass = createAction(APPLY_CLASS, ({token, groupId, contents, childId}) => ({
    token,
    groupId,
    contents,
    childId
}));

export const applyClassSaga = createRequestSaga(APPLY_CLASS, actionClassAPI.applyClass);

export function* applyPoomClassSaga() {
    yield takeLatest(APPLY_CLASS, applyClassSaga);
};

const initialState = {
    contents: '',
    childId: '',
    apply: null,
    applyError: null
};

const applyPoomClass = handleActions({
        [INITIALIZE]: state => initialState,
        [CHANGE_FILED]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value
        }),

        [APPLY_CLASS]: state => ({
            ...state,
            applyClass: null,
            applyClassError: null
        }),
        [APPLY_CLASS_SUCCESS]: (state, {payload: applyClass}) => ({
            ...state,
            applyClass: applyClass
        }),
        [APPLY_CLASS_FAILURE]: (state, {payload: applyClassError}) => ({
            ...state,
            applyClassError: applyClassError
        })
    },
    initialState
);

export default applyPoomClass;