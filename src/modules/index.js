import {combineReducers} from "redux";
import auth, {authSaga} from "./auth";
import oauthHandler from "./oauthHandler";
import loading from "./loading";
import {all} from 'redux-saga/effects';
import user from "./user";
import {actionCreators} from './oAuth/kakao';
import childcareWrite, {writeSaga} from "./childcare/childcareWrite";
import childcarePosts, {childcarePostsSaga} from "./childcare/childcarePosts";
import classWrite, {classWriteSaga} from "./poom-class/classWrite";
import classPosts, {classPostsSaga} from "./poom-class/classPosts";
import classCommentWrite, {classCommentWriteSaga} from "./poom-class/classCommentWrite";

const rootReducer = combineReducers({
    auth,
    oauthHandler,
    loading,
    user,
    childcareWrite,
    childcarePosts,
    classWrite,
    classPosts,
    classCommentWrite,
    actionCreators
});

export function* rootSaga() {
    yield all([authSaga(), writeSaga(), childcarePostsSaga(), classWriteSaga(), classPostsSaga(), classCommentWriteSaga()]);
}

export default rootReducer;