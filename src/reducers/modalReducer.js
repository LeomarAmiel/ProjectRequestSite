import { REDIRECT_MODAL, TOGGLE_MODAL } from '../actions'

const initialState = {
    isShowingModal: false,
    type: undefined
};

export default (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_MODAL:
            return {
                isShowingModal: state.isShowingModal ? false : true,
                type: action.payload
            };
        case REDIRECT_MODAL: 
            return {
                isShowingModal: true,
                type: state.type === 'login' ? 'signup' : 'login'
            }
        default:
            return state;
    }
}