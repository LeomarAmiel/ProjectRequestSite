import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleOpenModal } from '../../actions';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
    padding: 1rem 0 1rem 0;
    @media (max-width: 1200px) {
        padding: .75rem 2rem;
        justify-content: space-between;
    }
`;

const HeaderLogo = styled.a`
`;

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

const SignupButton = LoginButton.extend`
    background-color: rgb(46, 49, 55);
    color: white;
    @media (max-width: 768px) {
        display: none;
    }
`

class Header extends Component {
    toggleModal = (data) => {
        this.props.toggleOpenModal(data);
    }

    render(){
        return (
            <Wrapper>
                <HeaderLogo>
                    LeomarAmiel
                </HeaderLogo>
                <span>
                    <LoginButton onClick={() => this.toggleModal('login')}>
                        LOG IN
                    </LoginButton>
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

export default connect(mapStateToProps, { toggleOpenModal })(Header);