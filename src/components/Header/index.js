import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: 'center';
    padding: .25rem 0;
    @media (max-width: 768px) {
        padding: .75rem .5rem;
        display: flex;
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

export default () => (
    <Header>
        <HeaderLogo>
            LeomarAmiel
        </HeaderLogo>
        <span>
            <LoginButton>
                LOG IN
            </LoginButton>
            <SignupButton>
                SIGN UP
            </SignupButton>
        </span>
    </Header>
)