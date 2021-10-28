import {combineReducers} from "redux";
import auth, {authSaga} from "./auth";
import oauthHandler from "./oauthHandler";
import loading from "./loading";
import {all} from 'redux-saga/effects';
import user, {userSaga} from "./user";
import {actionCreators} from './oAuth/kakao';
import expertWrite, {writeSaga} from "./childcare/expertWrite";
import expertPosts, {expertPostsSaga} from "./childcare/expertPosts";
import classWrite, {classWriteSaga} from "./poom-class/classWrite";
import classPosts, {classPostsSaga} from "./poom-class/classPosts";

const rootReducer = combineReducers({
    auth,
    oauthHandler,
    loading,
    user,
    write: expertWrite,
    expertPosts,
    classWrite,
    classPosts,
    actionCreators
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), writeSaga(), expertPostsSaga(), classWriteSaga(), classPostsSaga()]);
}

export default rootReducer;