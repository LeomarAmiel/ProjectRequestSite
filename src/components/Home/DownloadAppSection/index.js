import React from 'react';
import styled from 'styled-components';
import Download from './Download';
import PhoneSection from './phoneSection';

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    background-color: rgb(250, 250, 250);
    padding: 2rem 0 0 0;
    @media(max-width: 768px){
        flex-direction: column;
        flex-wrap: wrap;
    }
`;

export default () => (
    <Wrapper>
        <Download/>
        <PhoneSection/>
    </Wrapper>
);