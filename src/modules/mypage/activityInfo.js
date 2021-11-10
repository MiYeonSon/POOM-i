import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as activityAPI from '../../lib/api/mypage/activityInfo'
import {takeLatest} from "redux-saga/effects";

// 참여 품앗이 목록 출력 관련 액션 타입 정의
const [
    LIST_ACTIVITY,
    LIST_ACTIVITY_SUCCESS,
    LIST_ACTIVITY_FAILURE
] = createRequestActionTypes('activityInfo/LIST_ACTIVITY');



export const listActivity = createAction(
    LIST_ACTIVITY,
    ({token}) => ({token})
);

const listActivitySaga = createRequestSaga(LIST_ACTIVITY, activityAPI.getActivityInfo);
export function* activityInfoSaga(){
    yield takeLatest(LIST_ACTIVITY, listActivitySaga);
}

const initialState = {
    list : null,
    error : null
}

const activityInfo = handleActions(
    {
        [LIST_ACTIVITY_SUCCESS] : (state, {payload : list}) => ({
            ...state,
            list
        }),
        [LIST_ACTIVITY_FAILURE] : (state, {payload : error}) => ({
            ...state,
            error
        }),
    },
    initialState
);

export default activityInfo;