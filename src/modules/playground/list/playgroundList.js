import createRequestSaga, {createRequestActionTypes} from "../../../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as postsAPI from '../../../lib/api/playgroundList';
import {takeLatest} from "redux-saga/effects";


const [
    READ_LIST,
    READ_LIST_SUCCESS,
    READ_LIST_FAILURE
] = createRequestActionTypes('palygroundList/READ_LIST');

export const readList = createAction(READ_LIST, ({token}) => ({token}));

const readListSaga = createRequestSaga(READ_LIST, postsAPI.readList);

export function* playgroundListSaga() {
    yield takeLatest(READ_LIST, readListSaga);
}

const initialState = {
    list: null,
    listError: null
};

const playgroundList = handleActions({
        [READ_LIST_SUCCESS]: (state, {payload: list}) => ({
            ...state,
            list
        }),
        [READ_LIST_FAILURE]: (state, {payload: listError}) => ({
            ...state,
            listError
        })

    },
    initialState
);

export default playgroundList;