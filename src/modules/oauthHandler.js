import {createAction, handleActions} from "redux-actions";

const CODE = 'oauth/CODE';

export const code = createAction(CODE);

const initialState = {
    code : ''
};

const oauthHandler = handleActions({
        [CODE]: (state, action) => ({code: state.code})
    },
    initialState
)
export default oauthHandler;