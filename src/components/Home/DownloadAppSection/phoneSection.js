import React from 'react';
import styled from 'styled-components';

const Phone = styled.div`
    background: no-repeat url('./assets/phone.png');
    background-size: 20rem;
    background-position: 50% -2.5rem;
    flex: 0 0 15rem;
    height: 17.5rem;
    @media(max-width: 768px){
        flex: 0 0 100%;
        height: 15rem;
        background-position: 50% -1rem;
        background-size: 16rem;
        order: 2;
    }
`;

export default () => (
    <Phone/>
);