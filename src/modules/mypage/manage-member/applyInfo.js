import createRequestSaga, {createRequestActionTypes} from "../../../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as applyInfoAPI from '../../../lib/api/mypage/manage-member/applyInfo';
import {takeLatest} from "redux-saga/effects";

const [
    LIST_APPLY_MEMBER_INFO,
    LIST_APPLY_MEMBER_INFO_SUCCESS,
    LIST_APPLY_MEMBER_INFO_FAILURE
] = createRequestActionTypes('applyInfo/LIST_APPLY_INFO');

const [
    LIST_APPLY_FORM,
    LIST_APPLY_FORM_SUCCESS,
    LIST_APPLY_FORM_FAILURE
] = createRequestActionTypes('applyInfo/LIST_APPLY_FORM');

export const listApplyMemberInfo = createAction(
    LIST_APPLY_MEMBER_INFO,
    ({token}) => ({token})
);

export const listApplyForm = createAction(
    LIST_APPLY_FORM,
    ({token}) => ({token})
);

const listApplyMemberInfoSaga = createRequestSaga(LIST_APPLY_MEMBER_INFO, applyInfoAPI.listApplyMemberInfo);

const listApplyFormSaga = createRequestSaga(LIST_APPLY_FORM, applyInfoAPI.listApplyForm);


export function* applyInfoSaga(){
    yield takeLatest(LIST_APPLY_MEMBER_INFO, listApplyMemberInfoSaga);
    yield takeLatest(LIST_APPLY_FORM, listApplyFormSaga);
}

const initialState = {
    memberInfo : null,
    memberInfoError : null,
    formInfo : null,
    formInfoError : null
};

const applyInfo = handleActions(
    {
        [LIST_APPLY_MEMBER_INFO_SUCCESS] : (state, {payload : memberInfo}) => ({
            ...state,
            memberInfo
        }),
        [LIST_APPLY_MEMBER_INFO_FAILURE] : (state, {payload : error}) => ({
            error
        }),
        [LIST_APPLY_FORM_SUCCESS] : (state, {payload : formInfo}) => ({
            ...state,
            formInfo
        }),
        [LIST_APPLY_FORM_FAILURE] : (state, {payload : formInfoError}) => ({
            ...state,
            formInfoError
        })
    },
    initialState
);

export default applyInfo;