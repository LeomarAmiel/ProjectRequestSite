import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DownloadWrapper = styled.div`
    display: flex;
    flex-direction: column;
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

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    @media(max-width: 768px){
        justify-content: center;
        flex-direction: column;
    }
`;

const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 30px;
    margin: .75rem 1rem .75rem 0;
    padding: .95rem 1.5rem;
    font-size: .6rem;
    font-weight: 300;
    width: 7rem;
    @media (max-width: 768px) {
        width: 15rem;
    }
    &:focus{
        outline: none;
    }
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
            <ButtonWrapper>
                <Button>
                    App Store 
                </Button>
                <Button>
                    Play Store 
                </Button>
            </ButtonWrapper>
        </DownloadWrapper>
    </Wrapper>
);