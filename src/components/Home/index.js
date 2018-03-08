import React from 'react';
import styled from 'styled-components';
import CTASection from './CTASection';
import StackSection from './StackSection';
import DownloadAppSection from './DownloadAppSection';
import Header from '../Header';
import Footer from '../Footer';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default () => (
    <Wrapper>
        <Header/>
        <CTASection/>
        <StackSection/>
        <DownloadAppSection/>
        <Footer/>
    </Wrapper>
)