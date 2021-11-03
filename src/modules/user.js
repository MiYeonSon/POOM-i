import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리

const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, ({user, token}) => ({user, token}));
export const logout = createAction(LOGOUT);

function* logoutSaga() {
    try {
        yield call(authAPI.logout); // logout API 호출
        localStorage.removeItem('token'); // localStorage 에서 user 제거
        localStorage.removeItem('user'); // localStorage 에서 user 제거
    } catch (e) {
        console.log(e);
    }
}

export function* userSaga() {
    yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
    userInfo: null,
    token : null,
};

export default handleActions(
    {
        [TEMP_SET_USER]: (state, { payload: userInfo, token }) => ({
            ...state,
            userInfo,
            token
        }),
        [LOGOUT]: state => ({
            ...state,
            userInfo: null,
            token : null
        }),
    },
    initialState,
);