import {combineReducers} from "redux";
import {all} from 'redux-saga/effects';
import auth, {authSaga} from "./auth";
import oauthHandler from "./oauthHandler";
import loading from "./loading";
import user from "./user";
import {actionCreators} from './oAuth/kakao';
import childcareWrite, {writeSaga} from "./childcare/childcareWrite";
import childcarePosts, {childcarePostsSaga} from "./childcare/childcarePosts";
import classWrite, {classWriteSaga} from "./poom-class/classWrite";
import classPosts, {classPostsSaga} from "./poom-class/classPosts";
import classCommentWrite, {classCommentWriteSaga} from "./poom-class/classCommentWrite";
import classCommentPosts, {classCommentPostsSaga} from "./poom-class/classCommentPosts";

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
    classCommentPosts,
    actionCreators
});

export function* rootSaga() {
    yield all([authSaga(), writeSaga(), childcarePostsSaga(), classWriteSaga(), classPostsSaga(), classCommentWriteSaga()], classCommentPostsSaga());
}

export default rootReducer;