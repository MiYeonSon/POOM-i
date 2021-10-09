import {createAction, handleActions} from 'redux-actions';
import produce from "immer";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import * as authAPI from '../lib/api/auth';
import {takeLatest} from 'redux-saga/effects';

// 액션 타입 정의
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN')
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER');

//createAction을 사용하면 매번 객체를 직접 만들어줄 필요 없이 간단하게 액션 생성 함수를 선언할 수 있다.
// 액션에 필요한 데이터들은 두 번째 파라미터인 payload에 넣어준다. 넣어준다.
export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form,
        key,
        value
    })
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form);

export const login = createAction(LOGIN, ({email, password}) => ({email, password}));
export const register = createAction(REGISTER, ({name, phoneNumber, email, password, nick, gender, address, addressFile}) => ({
    name,
    phoneNumber,
    email,
    password,
    nick,
    gender,
    address,
    addressFile
}))

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const registerSaga = createRequestSaga(REGISTER, authAPI.register);

export function* authSaga() {
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(REGISTER, registerSaga);
}

const initialState = {
    login : {
        email : '',
        password : ''
    },
    register : {
        name : '',
        phoneNumber : '',
        email : '',
        password: '',
        passwordConfirm : '',
        nick : '',
        gender : '',
        address : {
            postCode : '',
            address : '',
            detailAddress : '',
            extraAddress : ''
        },
        file : undefined
    },
    auth : null,
    authError : null
};



// handleActions를 활용하여 리듀서 함수를 만들 수 있으며, 함수의 첫 번째 파라미터에는 각 액션에 대한 업데이트 함수를 넣어주고, 두 번째 파라미터에는 초기 상태를 넣어준다.
const auth=handleActions(
    // 각 액션에 대한 업데이트 함수
    {
        [CHANGE_FIELD] : (state, {payload : {form, key, value}}) =>
            produce(state, draft => {
                draft[form][key] = value
            }),
        [INITIALIZE_FORM] : (state, {payload : form}) => ({
            ...state,
            [form] : initialState[form]
        }),
        [LOGIN_SUCCESS] : (state, {payload : auth}) => ({
            ...state,
            authError: null,
            auth
        }),
        [LOGIN_FAILURE] : (state, {payload : error}) => ({
            ...state,
            authError : error
        })
        ,
        [REGISTER_SUCCESS] : (state, {payload : auth}) => ({
            ...state,
            authError: null,
            auth
        }),
        [REGISTER_FAILURE] : (state, {payload : error}) => ({
            ...state,
            authError : error
        })
    },
    // 초기 상태
    initialState
);



export default auth;