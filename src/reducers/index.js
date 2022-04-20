import { combineReducers } from "redux";
import Authreducer from "./Authreducer";
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    Authstate:Authreducer,
    form:formReducer,
})