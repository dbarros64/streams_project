import StreamActionTypes from "../types";

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};


export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case StreamActionTypes.SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload
            };
        case StreamActionTypes.SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                userId: null
            };
        default:
            return state
    }
};