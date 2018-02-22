import React from 'react';
import styled from 'styled-components';

const Computer = styled.div`
    background: no-repeat url('./assets/mac.png');
    background-size: 10rem;
    background-position: 55% 75%;
    flex: 0 0 33%;
    height: 25rem;
    @media(max-width: 768px){
        flex: 0 0 50%;
        height: 10rem;
        background-position: 100% 80%;
        background-size: 7rem;
        order: 2;
    }
    @media(min-width: 769px) and (max-width: 1024px){
        background-position: -5rem 60%;
        flex: 0 0 25%;
        background-size: 10rem;
    }
`;

export default () => (
    <Computer>
    </Computer>
);