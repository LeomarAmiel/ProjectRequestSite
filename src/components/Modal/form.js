import React, { Component } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { signUp, logIn, authError } from '../../actions';
import ErrorMessage from './ErrorMessage';

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 1.5rem 0;
    height: 13.5rem;
    @media(max-width: 768px) {
        height: 16rem;
    }
`;

const Input = styled.input`
    position: relative;
    height: 45px;
    width: 15rem;
    border: 0;
    border-bottom: 2px solid rgb(236, 236, 236);
    font-size: .65rem;  
    &:focus {
        outline: none;
    }
    &::placeholder{
        color: rgb(180, 180, 180);
        font-size: .65rem; 
        font-weight: 300;
    }
    & + span::after {
        display: block;
        content: '';
        margin-top: -2px;
        border-bottom: solid 3px rgb(42, 97, 24);  
        transform: scaleX(0);  
        transition: transform 200ms ease-out;
    }
    &:focus + span::after {
        transform: scaleX(1);
    }
`;

const InputSibling = styled.span`
    position: relative;
    height: 2px;
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

const theme = {
    animate: true,
    transform : 'translateY(10px)'
};

const ButtonWrapperKeyframes = keyframes`
    0% {
        transform: translateY(0)
    } 
    20% {
        transform: translateY(16px)
    } 
    40% {
        transform: translateY(6px)
    }
    60% {
        transform: translateY(14px)
    }
    80% {
        transform: translateY(8px)
    }
    90% {
        transform: translateY(12px)
    }
    100% {
        transform: translateY(10px)
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transform: none;
    animation: ${(props) => props.theme.animate ? ButtonWrapperKeyframes : null } .5s;
    animation-fill-mode: forwards;
`;

const ButtonSeparator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TextSeparator = styled.span`
    color: #979797;
    font-size: .5rem;
    font-weight: 100;
`;

const HR = styled.hr`
    border: 0;
    border-bottom: 1px solid #D7D7D7;
    width: 45%;
`;

const FacebookButton = Button.extend`
    background-color: rgb(60, 82, 136);
`;

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeEmail (e) {
        this.setState({ email: e.target.value});
    }
    changePassword (e) {
        this.setState({ password: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.props.onModalForm==='signup' || window.location.pathname === '/signup') {
            if(this.state.password.length < 8) {
                this.props.authError('Password should not be less than eight characters');
                return;
            }
            this.props.signUp({email: this.state.email, password: this.state.password});
        } else if (this.props.onModalForm==='login' || window.location.pathname === '/login') {
            this.props.logIn({email: this.state.email, password: this.state.password});
        }
    }

    render(){
        return (
            <FormWrapper onSubmit={this.handleSubmit}>
                <Input placeholder='Email address' value={this.state.email} onChange={this.changeEmail.bind(this)} type="email" />
                <InputSibling/>
                <Input placeholder='Password' value={this.state.password} onChange={this.changePassword.bind(this)} type="password" />
                <InputSibling/>
                {this.props.children}
                { this.props.auth.error 
                    ? <ErrorMessage error={ this.props.auth.error } /> 
                    : null 
                }
                <ThemeProvider theme={this.props.auth.error !==null ? theme : { animate: false }}>
                    <ButtonsWrapper>
                        <Button type="submit">
                            { this.props.onModalForm==='login'||window.location.pathname === '/login' ? 'SIGN IN': 'SIGN UP' }
                        </Button>
                        <ButtonSeparator>
                            <HR/>
                            <TextSeparator>
                                or
                            </TextSeparator>
                            <HR/>
                        </ButtonSeparator>
                        <FacebookButton> FACEBOOK </FacebookButton>
                    </ButtonsWrapper>

                </ThemeProvider>
            </FormWrapper>

        );
    }
}

const mapStateToProps = ({auth}) => ({
    auth
});

export default connect(mapStateToProps, { signUp, logIn, authError })(Form)