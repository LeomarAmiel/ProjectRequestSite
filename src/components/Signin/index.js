import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ModalSection from './modalSection';
import { toggleOpenModal } from '../../actions';

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
        this.props.toggleOpenModal(undefined);
    }

    stopClickPropagation(e){
		e.stopPropagation();
    }
    
    render(){
        let modalElement = undefined; 
        this.props.modal.isShowingModal 
            ? modalElement = (
                <Wrapper onClick={this.wrapperClick.bind(this)}>
                    <ModalSection onStopPropagation={this.stopClickPropagation.bind(this)} onModalData={this.props.modal.type}/>
                </Wrapper>
            )
            : modalElement = null;
        return (
            modalElement
        );
    }
}

const mapStateToProps = (state) => ({
    modal: state.modal
});

export default connect(mapStateToProps, { toggleOpenModal })(Signin);