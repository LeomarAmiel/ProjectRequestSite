import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DownloadWrapper = styled.div`
    @media(max-width: 768){
        flex: 999 0 100%;
    }
`;

const DownloadDescription = styled.p`
    font-size: .75rem;
    color: rgb(100, 104, 113);
`;

const Heading = styled.h3`
    font-weight: 700;

`;

export default () => (
    <Wrapper>
        <DownloadWrapper>
            <Heading>
                Download my
                <br/>
                best apps
            </Heading>
            <DownloadDescription>
                It's coming soon, but it will come in bunches
            </DownloadDescription>
        </DownloadWrapper>
    </Wrapper>
);