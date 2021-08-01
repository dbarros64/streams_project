import StreamActionTypes from '../types';
import _ from 'lodash';


export const streamReducer = (state = {}, action) => {
    switch (action.type) {
        case StreamActionTypes.FETCH_STREAMS:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            };
        case StreamActionTypes.FETCH_STREAM:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case StreamActionTypes.CREATE_STREAM:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case StreamActionTypes.EDIT_STREAM:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case StreamActionTypes.DELETE_STREAM:
            return _.omit(state, action.payload)

        default:
            return state
    }
}