import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';

const SET_USER = 'user/SET_USER'; // 새로고침 이후 임시 로그인 처리
const SET_TOKEN = 'user/SET_TOKEN';
const LOGOUT = 'user/LOGOUT';

export const setUser = createAction(SET_USER, (user) => (user));
export const setToken = createAction(SET_TOKEN, (token) => (token));
export const logout = createAction(LOGOUT);

function* logoutSaga() {
    try {
        yield call(() => localStorage.clear());// localStorage 에서 user 제거
    } catch (e) {
        console.log(e);
    }
}

export function* userSaga() {
    yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
    userInfo: null,
    token : null
};

export const user =  handleActions(
    {
        [SET_USER]: (state, { payload: userInfo}) => ({
            ...state,
            userInfo
        }),
        [SET_TOKEN] : (state, {payload : token}) => ({
            ...state,
            token
        }),
        [LOGOUT]: (state) => ({
            ...state,
            userInfo: null,
            token : null
        }),
    },
    initialState,
);
export default user;