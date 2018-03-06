import React, { Component } from 'react';
import styled from 'styled-components';
import SignInSection from './signInSection';

const Wrapper = styled.div`
	background-color: rgba(0, 0, 0, .2);
    display: flex;
    flex-direction: column;
    justify-content: center;
	align-items: center;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 200;
	height: 100%;
	width: 100vw;

`;

export default class extends Component {
    stopClickPropagation(e){
		e.stopPropagation();
    }
    
    render(){
        return (
            <Wrapper>
                <SignInSection/>
            </Wrapper>
        );
    }
}