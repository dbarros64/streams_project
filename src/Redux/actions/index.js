import StreamActionTypes from "../types";
import { streamsApi } from '../../apis/streams';
import { history } from "../../history";


export const signIn = (userId) => {
    return {
        type: StreamActionTypes.SIGN_IN,
        payload: userId
    }
};


export const signOut = () => {
    return {
        type: StreamActionTypes.SIGN_OUT
    }
};


export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streamsApi.post('/streams', {...formValues, userId })

    dispatch({ 
        type: StreamActionTypes.CREATE_STREAM, 
        payload: response.data 
    })

    history.push('/');
};

export const fetchStreams = () => async dispatch => {
    const response = await streamsApi.get('/streams');

    dispatch({
        type: StreamActionTypes.FETCH_STREAMS,
        payload: response.data
    })
};


export const fetchStream = (id) => async dispatch => {
    const response = await streamsApi.get(`/streams/${id}`);

    dispatch({
        type: StreamActionTypes.FETCH_STREAM,
        payload: response.data
    })
};


export const editStream = (id, formValues) => async dispatch => {
    const response = await streamsApi.put(`/streams/${id}`, formValues);

    dispatch({
        type: StreamActionTypes.EDIT_STREAM,
        payload: response.data
    })
};


export const deleteStream = (id) => async dispatch => {
    await streamsApi.delete(`/streams/${id}`)

    dispatch({
        type: StreamActionTypes.DELETE_STREAM,
        payload: id
    })
};