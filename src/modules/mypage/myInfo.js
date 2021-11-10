import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as myInfoAPI from '../../lib/api/mypage/myInfo'
import {takeLatest} from "redux-saga/effects";

const [
    READ_MYINFO,
    READ_MYINFO_SUCCESS,
    READ_MYINFO_FAILURE
] = createRequestActionTypes('myInfo/READ_MYINFO');

export const getMyInfo = createAction(
    READ_MYINFO,
    ({token}) => ({token})
);

const getMyInfoSaga = createRequestSaga(READ_MYINFO, myInfoAPI.getMyInfo);
export function* myInfoSaga(){
    yield takeLatest(READ_MYINFO, getMyInfoSaga);
}

const initialState = {
    info : null,
    error : null
}

const myInfo = handleActions(
    {
        [READ_MYINFO_SUCCESS] : (state, {payload : info}) => ({
            ...state,
            info
        }),
        [READ_MYINFO_FAILURE] : (state, {payload : error}) => ({
            ...state,
            error
        }),
    },
    initialState
);

export default myInfo;