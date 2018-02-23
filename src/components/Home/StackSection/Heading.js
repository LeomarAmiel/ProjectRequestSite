import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    @media(max-width:1200px){
        padding:0;
    }
`;

const Heading = styled.h4`
    position: relative;
    display: block;
    width: 32rem;
    margin: 0;
    padding-bottom: 1rem;
    border-bottom: 2px solid rgb(220, 220, 220);
    @media(max-width: 768px){
        width: 90%
    };
`;

export default () => (
    <Wrapper>
        <Heading>
            Choose a Stack to work with 
        </Heading>
    </Wrapper>
);