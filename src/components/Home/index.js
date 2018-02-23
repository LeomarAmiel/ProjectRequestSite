import React from 'react';
import styled from 'styled-components';
import CTASection from './CTASection';
import StackSection from './StackSection';
import DownloadAppSection from './DownloadAppSection';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default () => (
    <Wrapper>
        <CTASection/>
        <StackSection/>
        <DownloadAppSection/>
    </Wrapper>
)