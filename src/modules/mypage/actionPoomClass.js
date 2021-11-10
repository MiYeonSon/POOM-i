// 품앗이 반 생성 관련 액션 타입 정의
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as actionClassAPI from '../../lib/api/mypage/actionPoomClass';
import {takeLatest} from "redux-saga/effects";

const INITIALIZE = 'actionPoomClass/INITIALIZE';  // 모든 내용 초기화
const CHANGE_FILED = 'actionPoomClass/CHANGE_FIELD';  // 특정 key 값 바꾸기

// 픔앗이 반
const [
    CREATE_CLASS,
    CREATE_CLASS_SUCCESS,
    CREATE_CLASS_FAILURE
] = createRequestActionTypes('actionPoomClass/CREATE_CLASS');

const [
    READ_CLASS,
    READ_CLASS_SUCCESS,
    READ_CLASS_FAILURE
] = createRequestActionTypes('actionPoomClass/READ_CLASS');



export const initialize = createAction(INITIALIZE);

// 여기서는 key, value가 액션에 필요한 추가 데이터인 payload
export const changeField = createAction(CHANGE_FILED, ({key, value}) => ({
    key,
    value
}));

export const createClass = createAction(CREATE_CLASS,
    ({
         title,
         meetingDay,
         mainActivity,
         description,
         recruitmentStatus,
         profileImage,
         token,
     }) => ({
        title,
        meetingDay,
        mainActivity,
        description,
        recruitmentStatus,
        profileImage,
        token,
    }));

export const readClass = createAction(READ_CLASS, ({token, groupId}) => ({token, groupId}));

export const createClassSaga = createRequestSaga(CREATE_CLASS, actionClassAPI.createClass);
export const readClassSaga = createRequestSaga(READ_CLASS, actionClassAPI.readClass);

export function* actionPoomClassSaga() {
    yield takeLatest(CREATE_CLASS, createClassSaga);
    yield takeLatest(READ_CLASS, readClassSaga);
}

const initialState = {
    title: '',
    meetingDay: '',
    mainActivity: '',
    description: '',
    recruitmentStatus: '',
    profileImage: '',
    poomClass: null,
    poomClassError: null,
    classInfo: null,
    classInfoError: null,

};

const actionPoomClass = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FILED]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value
        }),
        [CREATE_CLASS]: state => ({
            ...state,
            poomClass: null,
            poomClassError: null,
        }),
        [CREATE_CLASS_SUCCESS]: (state, {payload: poomClass}) => ({
            ...state,
            poomClass: poomClass
        }),
        [CREATE_CLASS_FAILURE]: (state, {payload: poomClassError}) => ({
            ...state,
            poomClassError: poomClassError
        }),
        [READ_CLASS_SUCCESS]: (state, {payload: classInfo}) => ({
            ...state,
            classInfo : classInfo
        }),
        [READ_CLASS_FAILURE] : (state, {payload : classInfoError}) => ({
            ...state,
            classInfoError : classInfoError
        }),
    },
    initialState
);

export default actionPoomClass;