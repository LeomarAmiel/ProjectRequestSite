export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const REDIRECT_MODAL = 'REDIRECT_MODAL';

export const toggleOpenModal = (payload) => ({
    type: TOGGLE_MODAL,
    payload
});

export const redirectModal = () => ({
    type: REDIRECT_MODAL,
})