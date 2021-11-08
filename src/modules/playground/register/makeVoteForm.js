import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../../../lib/createRequestSaga";
import * as postsAPI from '../../../lib/api/makeVoteForm';
import {takeLatest} from "redux-saga/effects";

const INITIALIZE = 'makeVoteForm/INITIALIZE';
const CHANGE_FILED = 'makeVoteForm/CHANGE_FIELD';

const [
    MAKE_VOTE,
    MAKE_VOTE_SUCCESS,
    MAKE_VOTE_FAILURE
] = createRequestActionTypes('makeVoteForm/MAKE_VOTE');


export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FILED, ({key, value}) => ({
    key,
    value
}));

export const makeVote = createAction(MAKE_VOTE, ({
                                                     token,
                                                     images,
                                                     postCode,
                                                     address,
                                                     detailAddress,
                                                     extraAddress,
                                                     purposeUsing
                                                 }) => ({
    token,
    images,
    postCode,
    address,
    detailAddress,
    extraAddress,
    purposeUsing
}));

const makeVoteSaga = createRequestSaga(MAKE_VOTE, postsAPI.makeVote);

export function* makeVoteFormSaga() {
    yield takeLatest(MAKE_VOTE, makeVoteSaga);
}

const initialState = {
    images: '',
    postCode: '',
    address: '',
    detailAddress: '',
    extraAddress: '',
    purposeUsing: '',
    vote: null,
    voteError: null,
};

const makeVoteForm = handleActions({
        [INITIALIZE]: state => initialState,
        [CHANGE_FILED]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value
        }),
        [MAKE_VOTE]: state => ({
            ...state,
            vote: null,
            voteError: null
        }),
        [MAKE_VOTE_SUCCESS]: (state, {payload: vote}) => ({
            ...state,
            vote
        }),
        [MAKE_VOTE_FAILURE]: (state, {payload: voteError}) => ({
            ...state,
            voteError
        }),
    },
    initialState
);

export default makeVoteForm;