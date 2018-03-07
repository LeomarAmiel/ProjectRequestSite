import { TOGGLE_MODAL } from '../actions'

const initialState = {
    isShowingModal: false,
    type: undefined
};

export default (state = initialState, action) => {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case TOGGLE_MODAL:
            return {
                isShowingModal: state.isShowingModal ? false : true,
                type: action.payload
            };
        default:
            return state;
    }
}