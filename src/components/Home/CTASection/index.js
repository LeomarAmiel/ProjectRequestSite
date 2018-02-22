import React from 'react';
import styled from 'styled-components';
import FirstSection from './firstSection';
import ComputerSection from './computerSection';
import GadgetSection from './gadgetSection';

const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    @media(max-width: 768px){
        flex-wrap: wrap;
    }
`;

export default () => (
    <Wrapper>
        <ComputerSection/>
        <FirstSection/>
        <GadgetSection/>
    </Wrapper>
);