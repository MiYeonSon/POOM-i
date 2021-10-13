import {combineReducers} from "redux";
import auth, {authSaga} from "./auth";
import oauthHandler from "./oauthHandler";
import loading from "./loading";
import {all} from 'redux-saga/effects';
import user, {userSaga} from "./user";
import {actionCreators} from './kakao';
import expertWrite, {writeSaga} from "./expertWrite";
import expertPosts, {expertPostsSaga} from "./expertPosts";

const rootReducer = combineReducers({
    auth,
    oauthHandler,
    loading,
    user,
    write: expertWrite,
    expertPosts,
    actionCreators
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), writeSaga(), expertPostsSaga()]);
}

export default rootReducer;