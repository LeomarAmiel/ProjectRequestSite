import React from 'react';
import styled, { keyframes } from 'styled-components';

const ErrorWrapperKeyframes = keyframes`
    0% {
        display: none;
        opacity: 0;
    }
    1% {
        display: block;
        opacity: 0;
    }
    100% {
        display: block;
        opacity: 1;
    }
`;

const ErrorWrapper = styled.div`
    opacity: 0;
    border: 0;
    width: 15rem;
    animation: ${ErrorWrapperKeyframes} 1s;
    animation-fill-mode: forwards;
`;

const ErrorMessage = styled.p`
    font-size: .6rem;
    color: red;
    text-align: left;
    margin: .2rem 0;
`;

export default ({error}) => (
    <ErrorWrapper>
        <ErrorMessage>
            {error}
        </ErrorMessage>
    </ErrorWrapper>
)