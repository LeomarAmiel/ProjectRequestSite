import { combineReducers } from 'redux';
import ModalReducer from './modalReducer';
import AuthReducer from './authReducer';

export default combineReducers({
    modal: ModalReducer,
    auth: AuthReducer
})