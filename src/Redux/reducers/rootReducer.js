import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { reducer as formReducer } from 'redux-form';
import { streamReducer } from "./streamReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});


export default rootReducer;