import {combineReducers} from "redux";
import {all} from 'redux-saga/effects';
import auth, {authSaga} from "./auth";
import oauthHandler from "./oauthHandler";
import loading from "./loading";
import user, {userSaga} from "./user";
import {actionCreators} from './oAuth/kakao';
import childcareWrite, {writeSaga} from "./childcare/childcareWrite";
import childcarePosts, {childcarePostsSaga} from "./childcare/childcarePosts";
import classWrite, {classWriteSaga} from "./poom-class/classWrite";
import classPosts, {classPostsSaga} from "./poom-class/classPosts";
import classCommentWrite, {classCommentWriteSaga} from "./poom-class/classCommentWrite";
import classCommentPosts, {classCommentPostsSaga} from "./poom-class/classCommentPosts";
import childcareSupportWrite, {childcareSupportWriteSaga} from "./childcare/childcareSupportWrite";
import detailInfo, {getDetailInfoSaga} from "./detailInfo/detailInfo";
import childcareSupportPosts, {childcareSupportPostsSaga} from "./childcare/childcareSupportPosts";
import makeVoteForm, {makeVoteFormSaga} from "./playground/register/makeVoteForm";

const rootReducer = combineReducers({
    auth,
    oauthHandler,
    loading,
    user,
    detailInfo,
    childcareWrite,
    childcarePosts,
    childcareSupportWrite,
    childcareSupportPosts,
    classWrite,
    classPosts,
    classCommentWrite,
    classCommentPosts,
    makeVoteForm,
    actionCreators
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), writeSaga(), getDetailInfoSaga(), childcarePostsSaga(), childcareSupportWriteSaga(), childcareSupportPostsSaga(), classWriteSaga(),  classPostsSaga(), classCommentWriteSaga(), classCommentPostsSaga(), makeVoteFormSaga()]);
}

export default rootReducer;