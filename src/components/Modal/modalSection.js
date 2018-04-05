import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { redirectModal, toggleModal, authError } from '../../actions';
import Header from '../Header';
import Form from './form';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;
    background: white;
    width: 18.5rem;
    height: 23rem;
    position: relative;
    @media(max-width: 768px){
        justify-content: flex-start;
        width: 100%;
        box-shadow: unset;
        height: 100vh;
    }
`;

const Heading = styled.h3`
    margin: 0;
    font-size: 1rem;
    @media(max-width: 1024px){
        padding: 0 2.5rem;
        margin-top: 2rem;
    }
`;

const ForgotPasswordLink = styled.a`
    font-size: .45rem;
    color: rgb(84, 135, 247);
    padding: .75rem 0;
`;

const TermsText = styled.span`
    font-size: .45rem;
    padding: .75rem 0;
`;

const RedirectWrapper = styled.div`
    border-top: 1px solid #D7D7D7;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const RedirectText = styled.p`
    font-size: .6rem;
`; 

const RedirectLink = styled.a`
    color: rgb(42, 97, 24);
    font-size: .65rem;
    text-decoration: none;
    font-weight: 600;
`;

const RedirectRouterLink = RedirectLink.withComponent(Link);

const CloseButton = styled.button`
    height: 40px;
    width: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
    background: url('./assets/x-button.svg') center no-repeat;
    background-size: 25px;
    border: 0;
    &:focus {
        outline: none;
    }
    @media (max-width: 1024px){
        display: none;
    }
`;

class ModalSection extends Component {
    constructor (props) {
        super(props);
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }

    updateDimensions () {
        this.setState({height: window.innerHeight, width: window.innerWidth});
    }

    componentDidMount () {
        window.addEventListener('resize', this.updateDimensions.bind(this));
    }
    
    componentWillUnmount () {
        window.removeEventListener('resize', this.updateDimensions.bind(this));
    }

    onToggleModal() {
        this.props.toggleModal(undefined);
        this.props.authError(null);
    }

    onRedirect () {
        this.props.redirectModal();
        this.props.authError(null);
    }

    render() {
        let data = [];
        let formTerms = undefined;
        let redirect = undefined;
        let header = null;
        if(this.props.onModalData === 'login'|| this.props.onModalData === '/login'){
            data = ['Log in', 'Forgot Password?', 'New to my website?', 'SIGN UP'];
            formTerms = <ForgotPasswordLink> {data[1]} </ForgotPasswordLink>
            if(this.state.width<=768){
                redirect = <RedirectRouterLink to='/signup' onClick={this.onRedirect.bind(this)}> {data[3]} </RedirectRouterLink>;
                header = <Header/>;
            }
            else {
                redirect = <RedirectLink href="#" onClick={this.onRedirect.bind(this)}> {data[3]} </RedirectLink>
            }
        } else if(this.props.onModalData === 'signup'||this.props.onModalData === '/signup') {
            data = ['Sign up', 'By signing up, you agree to my Terms of Service.', 'Already have an account?', 'LOG IN']
            formTerms = <TermsText> {data[1]} </TermsText>
            if(this.state.width<=768){
                redirect = <RedirectRouterLink to='/login' onClick={this.onRedirect.bind(this)}> {data[3]} </RedirectRouterLink>
                header = <Header/>;
            }
            else {
                redirect = <RedirectLink href="#" onClick={this.onRedirect.bind(this)}> {data[3]} </RedirectLink>
            }
        }
        return (
            <Wrapper onClick={this.props.onStopPropagation}>
                { header }
                <Heading>
                    {data[0]}
                </Heading>
                <Form onModalForm={this.props.onModalData}>
                    {formTerms}
                </Form>
                <RedirectWrapper>
                    <RedirectText> {data[2]} </RedirectText>
                    {redirect}
                </RedirectWrapper>
                <CloseButton onClick={this.onToggleModal.bind(this)}/>
            </Wrapper>
        );
    }
}

export default connect(null, { redirectModal, toggleModal, authError })(ModalSection)