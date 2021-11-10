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
import playgroundList, {playgroundListSaga} from "./playground/list/playgroundList";
import submitFile, {submitSaga} from "./submitFile";
import activityInfo, {activityInfoSaga} from "./mypage/activityInfo";
import spaceFormInfo, {spaceFormSaga} from "./mypage/spaceFormInfo";
import myInfo, {myInfoSaga} from "./mypage/myInfo";
import actionPoomClass, {actionPoomClassSaga} from "./mypage/actionPoomClass";
import applyPoomClass, {applyPoomClassSaga} from "./mypage/applyPoomClass";

const rootReducer = combineReducers({
    auth,
    oauthHandler,
    loading,
    user,
    detailInfo,
    submitFile,
    childcareWrite,
    childcarePosts,
    childcareSupportWrite,
    childcareSupportPosts,
    classWrite,
    classPosts,
    classCommentWrite,
    classCommentPosts,
    makeVoteForm,
    playgroundList,
    myInfo,
    activityInfo,
    spaceFormInfo,
    actionPoomClass,
    applyPoomClass,

    actionCreators
});

export function* rootSaga() {
    yield all([
        authSaga(),
        userSaga(),
        writeSaga(),
        getDetailInfoSaga(),
        submitSaga(),

        childcarePostsSaga(),
        childcareSupportWriteSaga(),
        childcareSupportPostsSaga(),

        classWriteSaga(),
        classPostsSaga(),
        classCommentWriteSaga(),
        classCommentPostsSaga(),
        makeVoteFormSaga(),
        playgroundListSaga(),

        myInfoSaga(),
        spaceFormSaga(),
        activityInfoSaga(),

        actionPoomClassSaga(),
        applyPoomClassSaga()

    ]);
}

export default rootReducer;