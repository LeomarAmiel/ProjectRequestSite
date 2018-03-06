import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;
    background: white;
    width: 14rem;
    height: 20rem;
`;

const Heading = styled.h3`
    margin: 0;
    font-size: 1rem;
    @media(max-width: 768px){
        padding: 0 2.5rem;
    }
`;

export default () => (
    <Wrapper>
        <Heading>
            Log in
        </Heading>
    </Wrapper>
)