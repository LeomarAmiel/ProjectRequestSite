import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;
    background: white;
    width: 18.5rem;
    height: 23rem;
`;

const Heading = styled.h3`
    margin: 0;
    font-size: 1rem;
    @media(max-width: 768px){
        padding: 0 2.5rem;
    }
`;

const Input = styled.input`
    height: 45px;
    width: 15rem;
    border: 0;
    border-bottom: 2px solid rgb(236, 236, 236);
    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(42, 97, 24);
        transition: border-bottom .3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    &::placeholder{
        color: rgb(180, 180, 180);
        font-size: .65rem; 
        font-weight: 300;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1.75rem 0;
`;

const ForgotPasswordLink = styled.a`
    font-size: .5rem;
    color: rgb(84, 135, 247);
    padding: .75rem 0;
`;

const TermsText = styled.span`
    font-size: .5rem;
    padding: .75rem 0;
`;

const Button = styled.button`
    background-color: rgb(42, 97, 24);
    color: white;
    border-radius: 30px;
    padding: .65rem 1.25rem;
    margin: .3rem 0;
    font-size: .55rem;
    font-weight: 700;
    &:focus{
        outline: none;
    }
`;

const ButtonSeparator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TextSeparator = styled.span`
    color: #979797;
    font-size: .75rem;
`;

const HR = styled.hr`
    border: 0;
    border-bottom: 1px solid #D7D7D7;
    width: 42%;
`;

const FacebookButton = Button.extend`
    background-color: rgb(60, 82, 136);
`;

const RedirectWrapper = styled.div`
    border-top: 1px solid #D7D7D7;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const RedirectText = styled.p`
    font-size: .6rem;
`; 

const RedirectLink = styled.a`
    color: rgb(42, 97, 24);
    font-size: .65rem;
    text-decoration: none;
    font-weight: 600;
`;

export default (props) => {
    let data = [];
    let formTerms = undefined;
    props.onModalData === 'login' 
        ? (data = ['Log in', 'Forgot Password?', 'SIGN IN', 'New to my website?', 'SIGN UP'], formTerms = <ForgotPasswordLink> {data[1]} </ForgotPasswordLink>)
        : (data = ['Sign up', 'By signing up, you agree to my Terms of Service and Privacy Policy.', 'SIGN UP', 'Already have an account?', 'LOG IN'], formTerms = <TermsText> {data[1]} </TermsText>)

    return (
        <Wrapper onClick={props.onStopPropagation}>
            <Heading>
                {data[0]}
            </Heading>
            <Form>
                <Input placeholder='Email address'/>
                <Input placeholder='Password'/>
                {formTerms}
                <Button> {data[2]} </Button>
                <ButtonSeparator>
                    <HR/>
                    <TextSeparator>
                        or
                    </TextSeparator>
                    <HR/>
                </ButtonSeparator>
                <FacebookButton> FACEBOOK </FacebookButton>
            </Form>
            <RedirectWrapper>
                <RedirectText> {data[3]} </RedirectText>
                <RedirectLink href="#"> {data[4]} </RedirectLink>
            </RedirectWrapper>
        </Wrapper>
    );
}