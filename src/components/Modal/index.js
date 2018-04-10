import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from '../Header';
import ModalSection from './modalSection';
import { toggleModal, authError } from '../../actions';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
	align-items: center;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	height: 100%;
	width: 100vw;
`;
const HeaderWrapper = styled.div`
    align-self: stretch;
    position: absolute;
    top: 0;
    width: 100%;
`;

class Signin extends Component {
    constructor (props) {
        super(props);
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions () {
        this.setState({height: window.innerHeight, width: window.innerWidth});
    }

    componentDidMount () {
        window.addEventListener('resize', this.updateDimensions);
    }
    
    componentWillUnmount () {
        window.removeEventListener('resize', this.updateDimensions);
    }

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
            if(this.state.width<=768){
                modalElement = (
                    <Wrapper>
                        <ModalSection onModalData={this.props.modal.type === undefined ? this.props.match.path: this.props.modal.type }/>
                    </Wrapper>
                );
            } else {
                modalElement = (
                    <Wrapper>
                        <HeaderWrapper>
                            <Header/>
                        </HeaderWrapper>
                        <ModalSection onModalData={this.props.modal.type === undefined ? this.props.match.path: this.props.modal.type }/>
                    </Wrapper>
                );
            }
        }
        else {
            console.log('isShowingModal', this.props.modal.isShowingModal);
            modalElement = null;
            document.body.style.overflow='auto';
        }
        return modalElement;
    }
}

const mapStateToProps = ({modal}) => ({
    modal: modal
});

export default connect(mapStateToProps, { toggleModal, authError })(Signin);