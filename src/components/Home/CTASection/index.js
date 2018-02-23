import React from 'react';
import styled from 'styled-components';
import FirstSection from './firstSection';
import ComputerSection from './computerSection';
import GadgetSection from './gadgetSection';

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    padding-bottom: 6.2rem; 
    @media(max-width: 768px){
        padding-bottom: 0;
        flex-wrap: wrap;
    }
    @media(min-width: 769px) and (max-width: 1200px){
        padding-bottom: 1rem;
        justify-content: space-between;
    }
`;

export default () => (
    <Wrapper>
        <ComputerSection/>
        <FirstSection/>
        <GadgetSection/>
    </Wrapper>
);