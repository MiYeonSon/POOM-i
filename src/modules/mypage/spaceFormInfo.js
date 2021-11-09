import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as formAPI from '../../lib/api/mypage/spaceFormInfo';
import {takeLatest} from "redux-saga/effects";

const [
    LIST_FORM,
    LIST_FORM_SUCCESS,
    LIST_FORM_FAILURE
] = createRequestActionTypes('spaceFormInfo/LIST_FORM');

export const listForm = createAction(
    LIST_FORM,
    ({token}) => ({token})
);

const listFormSaga = createRequestSaga(LIST_FORM, formAPI.getFormList);

export function* spaceFormSaga(){
    yield takeLatest(LIST_FORM, listFormSaga);
}

const initialState = {
    forms : null,
    error : null
};

const spaceFormInfo = handleActions(
    {
        [LIST_FORM_SUCCESS] : (state, {payload : forms}) => ({
            ...state,
            forms
        }),
        [LIST_FORM_FAILURE] : (state, {payload : error}) => ({
            error
        })
    },
    initialState
);

export default spaceFormInfo;