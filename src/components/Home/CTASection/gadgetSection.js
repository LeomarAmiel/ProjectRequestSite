import React from 'react';
import styled from 'styled-components';

const Gadget = styled.div`
    background: no-repeat url('./assets/gadgets.jpg');
    background-size: 10rem;
    background-position: 2rem 75%;
    flex: 0 0 25%;
    height: 25rem;
    @media(max-width: 768px){
        flex: 0 0 50%;
        height: 10rem;
        background-position: 0% 80%;
        background-size: 8rem;
        order: 3;
    }
    @media(min-width: 769px) and (max-width: 1200px){
        background-position: 3rem 50%;
        flex: 0 0 20%;
        background-size: 10rem;
    }
`;

export default () => (
    <Gadget>
    </Gadget>
);