import React from 'react';
import styled from 'styled-components';

const FirstSection = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-content: center;
    flex: 0 0 40%;
    @media(max-width: 768px){
        flex: 0 0 100%;
        width: 100%;
        order: 1;
        padding: 2rem 0 2rem 0;
    }
    padding: 7rem 0 3rem 0;
`;

const HeadingWrapper = styled.div`
    padding-bottom: 2rem;
    text-align: center;
`;

const Heading = styled.h3`
    position: relative;
    display: block;
    margin: 0;
    font-size: 2rem;
    @media(max-width: 768px){
        padding: 0 2.5rem;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    padding: 0 0.5rem;
    justify-content: center;
`;

const Input = styled.input`
    height: 45px;
    width: 16rem;
    background-color: white;
    padding-left: 2.25rem;
    background: no-repeat url('./assets/location.svg');
    background-position: 5% 50%;
    border: 1px solid rgb(220, 220, 220);
    font-size: 18px;
    @media(max-width: 768px){
        &::placeholder{
            font-size: 14px; 
        }
    }
    &:focus{
        outline: none;
    }
`;

const Button = styled.button`
    background-color: rgb(42, 97, 24);
    color: white;
    margin-left: -10px;
    border: 0;
    width: 60px;
    padding: 0; 
`;

export default () => (
    <FirstSection>
        <HeadingWrapper>
            <Heading>
                However you want it. 
            </Heading>
            <br/>
            <Heading>
                I got you.
            </Heading>
        </HeadingWrapper>
        <InputWrapper>
            <Input placeholder="What do you want to build">
            </Input>
            <Button>
                &#10095;
            </Button>
        </InputWrapper>

    </FirstSection>
)