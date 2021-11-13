import createRequestSaga, {createRequestActionTypes} from "../../../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as applyInfoAPI from '../../../lib/api/mypage/manage-member/applyInfo';
import {takeLatest} from "redux-saga/effects";

const [
    LIST_APPLY_MEMBER_INFO,
    LIST_APPLY_MEMBER_INFO_SUCCESS,
    LIST_APPLY_MEMBER_INFO_FAILURE
] = createRequestActionTypes('applyInfo/LIST_APPLY_INFO');

export const listApplyMemberInfo = createAction(
    LIST_APPLY_MEMBER_INFO,
    ({token}) => ({token})
);

const listApplyMemberInfoSaga = createRequestSaga(LIST_APPLY_MEMBER_INFO, applyInfoAPI.listApplyMemberInfo);

export function* applyInfoSaga(){
    yield takeLatest(LIST_APPLY_MEMBER_INFO, listApplyMemberInfoSaga);
}

const initialState = {
    memberInfo : null,
    error : null
};

const applyInfo = handleActions(
    {
        [LIST_APPLY_MEMBER_INFO_SUCCESS] : (state, {payload : member}) => ({
            ...state,
            member
        }),
        [LIST_APPLY_MEMBER_INFO_FAILURE] : (state, {payload : error}) => ({
            error
        })
    },
    initialState
);

export default applyInfo;