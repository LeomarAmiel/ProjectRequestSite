import { combineReducers } from 'redux';
import ModalReducer from './modalReducer';

export default combineReducers({
    modal: ModalReducer
})