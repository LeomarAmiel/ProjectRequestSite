import { REDIRECT_MODAL, TOGGLE_MODAL, ROUTE_TO_SECTION } from '../actions'

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
                isShowingModal: state.isShowingModal,
                type: action.payload!==null 
                    ? action.payload
                    : state.type === 'login' ? 'signup' : 'login'
                    
            }
        case ROUTE_TO_SECTION: 
            return {
                isShowingModal: false,
                type: action.payload
            }
        default:
            return state;
    }
}