import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {takeLatest} from "redux-saga/effects";
import * as postsAPI from '../lib/api/submitFile';

const INITIALIZE = 'submitFile/INITIALIZE';
const CHANGE_FILED = 'submitFile/CHANGE_FIELD';

const [
    SUBMIT_FILE,
    SUBMIT_FILE_SUCCESS,
    SUBMIT_FILE_FAILURE
] = createRequestActionTypes('submitFile/SUBMIT_FILE');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FILED, ({key, value}) => ({
    key,
    value
}));

export const submitFileAction = createAction(SUBMIT_FILE, ({token, file}) => ({token, file}));

const submitFileSaga = createRequestSaga(SUBMIT_FILE, postsAPI.submitFile);


export function* submitSaga() {
    yield takeLatest(SUBMIT_FILE, submitFileSaga);
}

const initialState = {
    file: '',
    submit : null,
    submitError : null,
};

const submitFile = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FILED]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value
        }),
        [SUBMIT_FILE]: state => ({
            ...state,
            submit: null,
            submitError: null
        }),
        [SUBMIT_FILE_SUCCESS]: (state, {payload: submit}) => ({
            ...state,
            submit
        }),
        [SUBMIT_FILE_FAILURE]: (state, {payload: submitError}) => ({
            ...state,
            submitError
        }),
    },
    initialState
);

export default submitFile;