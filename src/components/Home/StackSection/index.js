import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import StackList from './StackList';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
`;

export default () => (
    <Wrapper>
        <Heading/>
        <StackList/>
    </Wrapper>
);