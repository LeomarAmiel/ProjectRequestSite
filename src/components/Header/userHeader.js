import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

export default () => (
    <Wrapper>
        <HeaderLink to="/" onClick={() => this.routeToSection(undefined)}>
            LeomarAmiel
        </HeaderLink>
    </Wrapper>
)
