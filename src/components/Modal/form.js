import React, { Component } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { signUp, logIn, authError } from '../../actions';

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1.5rem 0;
`;

const Input = styled.input`
    height: 45px;
    width: 15rem;
    border: 0;
    border-bottom: 2px solid rgb(236, 236, 236);
    font-size: .65rem;  
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

const ErrorWrapperKeyframes = keyframes`
    0% {
        opacity: 0;
    }
    100 {
        opacity: 1;
    }
`;

const ErrorWrapper = styled.div`
    box-sizing: border-box;
    background-color: #ffebe8;
    box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;
    border: 1px solid #dd3c10;
    position: absolute;
    left: 0;
    top: -100px;
    opacity: 1;
    animation: ${ErrorWrapperKeyframes} .8s cubic-bezier(1, 0, 0, 1);
    width: 100%;
    @media(max-width: 768px){
        background-color: unset;
        border: 0;
        box-shadow: unset;
        position: static;
        width: 15rem;
    }
`;

const ErrorMessage = styled.p`
    font-size: .6rem;
    margin: 1rem 1rem 1rem 1rem;
    text-align: center;
    @media(max-width: 768px){
        color: red;
        margin: .5rem 0;
        text-align: left;
    }

`;

const theme = {
    animate: true,
    transform : 'translateY(8px)'
};

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media(max-width: 768px) {
        transform: ${(props) => props.theme.animate ? props.theme.transform  : null };
        transition: ${(props) => props.theme.animate ? 'transform' : null } 1s;
    }
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

    renderError () {
        if(this.props.auth.error) {
            return (
                <ErrorWrapper>
                    <ErrorMessage>
                        {this.props.auth.error}
                    </ErrorMessage>
                </ErrorWrapper>
            )
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.props.onModalForm==='signup' || window.location.pathname === '/signup') {
            if(this.state.password.length < 8) {
                this.props.authError('Password should not be less than eight characters');
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
                <Input placeholder='Password' value={this.state.password} onChange={this.changePassword.bind(this)} type="password" />
                {this.props.children}
                {this.renderError()}
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