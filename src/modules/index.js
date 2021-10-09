import {combineReducers} from "redux";
import auth, {authSaga} from "./auth";
import oauthHandler from "./oauthHandler";
import loading from "./loading";
import {all} from 'redux-saga/effects';
import user, {userSaga} from "./user";
import {actionCreators} from './kakao';
import write, {writeSaga} from "./write";

const rootReducer = combineReducers({
    auth,
    oauthHandler,
    loading,
    user,
    write,
    actionCreators
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), writeSaga()]);
}

export default rootReducer;