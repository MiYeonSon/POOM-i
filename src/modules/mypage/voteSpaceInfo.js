import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as voteAPI from '../../lib/api/mypage/spaceVote';
import {takeLatest} from "redux-saga/effects";


const [
    GET_VOTE_INFO,
    GET_VOTE_INFO_SUCCESS,
    GET_VOTE_INFO_FAILURE
] = createRequestActionTypes('voteSpaceInfo/GET_VOTE_INFO');

export const getVoteInfo = createAction(
    GET_VOTE_INFO,
    ({token, voteId}) => ({token, voteId})
);

const getVoteInfoSaga = createRequestSaga(GET_VOTE_INFO, voteAPI.getVoteInfo);

export function* voteSpaceInfoSaga(){
    yield takeLatest(GET_VOTE_INFO, getVoteInfoSaga);
}

const initialState = {
    voteSpaceInfo : null,
    voteSpaceInfoError : null
};

const voteSpaceInfo = handleActions(
    {
        [GET_VOTE_INFO_SUCCESS] : (state, {payload : voteSpaceInfo}) => ({
            ...state,
            voteSpaceInfo
        }),
        [GET_VOTE_INFO_FAILURE] : (state, {payload : voteSpaceInfoError}) => ({
            ...state,
            voteSpaceInfoError
        })
    },
    initialState
);

export default voteSpaceInfo;