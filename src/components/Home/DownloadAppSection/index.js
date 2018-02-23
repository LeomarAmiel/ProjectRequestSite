import React from 'react';
import styled from 'styled-components';
import Download from './Download';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    background-color: rgb(250, 250, 250);
    padding: 2rem 0rem;
`;

export default () => (
    <Wrapper>
        <Download/>
    </Wrapper>
);