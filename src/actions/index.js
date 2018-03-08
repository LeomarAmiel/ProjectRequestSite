export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const REDIRECT_MODAL = 'REDIRECT_MODAL';
export const ROUTE_TO_SECTION = 'ROUTE_TO_SECTION';

export const toggleModal = (payload) => ({
    type: TOGGLE_MODAL,
    payload
});

export const redirectModal = () => ({
    type: REDIRECT_MODAL,
})

export const routeToSection = (payload) => ({
    type: ROUTE_TO_SECTION,
    payload
})