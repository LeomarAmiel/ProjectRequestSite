import axios from 'axios'; 

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

//This routes a signin modal to a signup modal vice versa
export const routeToSection = (payload) => ({
    type: ROUTE_TO_SECTION,
    payload
})

export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

export const signUp = data => dispatch => {
	axios.post('/signup', data)
	.then(res => {
        console.log('then');
        console.log(res);
    })
    .catch(err => {
        dispatch(authError('Email is already in use.'));
    })
}

export const signIn = (data) => dispatch => {
    axios.post('/signin',data)
    .then(res => {
        console.log('then');
        console.log(res)
    })
    .catch(err => {
        dispatch(authError('The username and password you entered did not match. Please try again.'));
    })
}

const authUser = (payload) => ({
    type: AUTH_USER,
    payload
});

export const authError = (payload) => ({
    type: AUTH_ERROR,
    payload
});


