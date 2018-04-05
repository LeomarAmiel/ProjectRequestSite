import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleModal, routeToSection } from '../../actions';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
    padding: 1rem 0 1rem 0;
    @media(max-width: 768px) {
        align-self: stretch;
    }
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
    background-color: transparent;
    color: black;
    border-radius: 20px;
    padding: .4rem 1rem;
    margin: 0 .1rem;
    font-weight: 700;
    &:focus{
        outline: none;
    }
`;

const LoginLink = LoginButton.withComponent(Link).extend`
    border: 1px solid black;
    text-decoration: none;
    font-size: .5rem;

`;

const SignupButton = LoginButton.extend`
    background-color: rgb(46, 49, 55);
    color: white;
    @media (max-width: 768px) {
        display: none;
    }
`;

class Header extends Component {
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

    toggleModal = (data) => {
        this.props.toggleModal(data);
    }

    routeToSection = (data) => {
        this.props.routeToSection(data);
    }

    render(){
        let navigationButton = undefined;
        if(this.state.width<=768){
            if(window.location.pathname === "/signup" || this.props.modal.type === 'signup'){
                navigationButton = <LoginLink to="/login" onClick={() => this.routeToSection('login')}> LOG IN </LoginLink>
            } else {
                navigationButton = <LoginLink to="/signup" onClick={() => this.routeToSection('signup')}> SIGN UP </LoginLink>
            }
        }
        else {
            navigationButton = <LoginButton onClick={()=> this.toggleModal('login')}> LOG IN </LoginButton>
        }
        return (
            <Wrapper>
                <HeaderLink to="/" onClick={() => this.routeToSection(undefined)}>
                    LeomarAmiel
                </HeaderLink>
                <span>
                    {navigationButton}
                <SignupButton onClick={() =>this.toggleModal('signup')}>
                    SIGN UP
                </SignupButton>
                </span>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    modal: state.modal
});

export default connect(mapStateToProps, { toggleModal, routeToSection })(Header);