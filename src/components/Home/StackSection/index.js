import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
`;

export default () => (
    <Wrapper>
        <Heading/>
    </Wrapper>
);