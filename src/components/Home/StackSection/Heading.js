import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`;

const Heading = styled.h4`
    position: relative;
    display: block;
    margin: 0;
    padding-bottom: 1rem;
    border-bottom: 2px solid rgb(220, 220, 220);
`;

export default () => (
    <Wrapper>
        <Heading>
            Choose a Stack to work with 
        </Heading>
    </Wrapper>
);