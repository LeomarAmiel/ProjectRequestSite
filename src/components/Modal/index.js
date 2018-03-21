import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ModalSection from './modalSection';
import { toggleModal, authError } from '../../actions';

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

class Signin extends Component {
    wrapperClick () {
        this.props.toggleModal(undefined);
        this.props.authError(null);
    }

    stopClickPropagation(e){
		e.stopPropagation();
    }
    
    render(){
        let modalElement = undefined; 
        if(this.props.modal.isShowingModal) {
            modalElement = (
                <Wrapper onClick={this.wrapperClick.bind(this)}>
                    <ModalSection onStopPropagation={this.stopClickPropagation.bind(this)} onModalData={this.props.modal.type}/>
                </Wrapper>
            );
            document.body.style.overflow='hidden';
        } else if ('match' in this.props){
            modalElement = (
                <Wrapper>
                    <ModalSection onModalData={this.props.modal.type}/>
                </Wrapper>
            );
        }
        else {
            modalElement = null;
            document.body.style.overflow='auto';
        }
        return (
            modalElement
        );
    }
}

const mapStateToProps = (state) => ({
    modal: state.modal
});

export default connect(mapStateToProps, { toggleModal, authError })(Signin);