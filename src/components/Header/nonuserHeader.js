import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleModal, routeToSection, redirectModal, authError } from '../../actions';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-self: stretch;
    padding: 1rem 0 1rem 0;
    height: 1.75rem;
    @media (max-width: 1200px) {
        padding: .75rem 2rem;
        justify-content: space-between;
    }
`;

const HeaderLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const LoginButton = styled.button`
    position: relative;
    background-color: transparent;
    color: black;
    border-radius: 20px;
    padding: .4rem 1rem;
    margin: 0 .1rem;
    font-weight: 700;
    &:hover {
        background-color: #ededed;
    }
    &:focus{
        outline: none;
    }
    &::after {
        content: '';
        position: absolute;
        width: 105%;
        height: 120%;
        top: -10%;
        right: 0;
        bottom: 0;
        left: -2.5%;
        z-index: -1;
        border-radius: 20px;
        opacity: 0;
        box-shadow: 0 0 0 2px rgba(76, 76, 76, .7);
        transition: opacity .3s ease-in;
    }
    &:active::after {
        opacity: 1;
    }
`;

const LoginLink = LoginButton.withComponent(Link).extend`
    border: 1px solid black;
    text-decoration: none;
    font-size: .5rem;
    &:hover {
        background-color: #ededed;
    }
    @media(max-width: 768px) {
        &:hover {
            background-color: transparent;
        }
    }
    &::after {
        content: none;
    }
`;

const SignupButton = LoginButton.extend`
    background-color: rgb(46, 49, 55);
    color: white;
    &:hover {
        background-color: #4c4c4c;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

class NonUserHeader extends Component {
    constructor (props) {
        super(props);
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions () {
        this.setState({height: window.innerHeight, width: window.innerWidth});
    }

    componentDidMount () {
        window.addEventListener('resize', this.updateDimensions);
    }
    
    componentWillUnmount () {
        window.removeEventListener('resize', this.updateDimensions);
    }

    toggleModal = (data) => {
        this.props.toggleModal(data);
    }

    routeToSection = (data) => {
        this.props.routeToSection(data);
        this.props.authError(null);
    }

    redirectModalData = (data) => {
        this.props.redirectModal(data);
        this.props.authError(null);
    }

    render(){
        let navigationButton = undefined;
        if(this.state.width<=768){
            if(window.location.pathname === "/signup" || this.props.modal.type === 'signup'|| (this.props.modal.type===undefined && window.location.pathname === '/')){
                navigationButton = <LoginLink to="/login" onClick={() => this.routeToSection('login')}> LOG IN </LoginLink>
            } else {
                navigationButton = <LoginLink to="/signup" onClick={() => this.routeToSection('signup')}> SIGN UP </LoginLink>
            }
        }
        else {
            if(window.location.pathname === "/login" || window.location.pathname === "/signup") {
                navigationButton = ( <span>
                    <LoginButton onClick={()=> this.redirectModalData('login')}> LOG IN </LoginButton>
                    <SignupButton onClick={() => this.redirectModalData('signup')}> SIGN UP </SignupButton>
                </span> );
            }
            else {
                navigationButton = (<span>
                    <LoginButton onClick={()=> this.toggleModal('login')}> LOG IN </LoginButton>
                    <SignupButton onClick={() => this.toggleModal('signup')}> SIGN UP </SignupButton>
                </span> );
            }
        }
        return (
            <Wrapper>
                <HeaderLink to="/" onClick={() => this.routeToSection(undefined)}>
                    LeomarAmiel
                </HeaderLink>
                <span>
                    {navigationButton}
                </span>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    modal: state.modal
});

export default connect(mapStateToProps, { toggleModal, routeToSection, redirectModal, authError })(NonUserHeader);