import React from 'react';
import styled from 'styled-components';
import StackItem from './StackItem';

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-bottom: 5rem;
    @media(max-width: 1200px){
        padding-top: 1rem;
        padding-left: 2rem;
        padding-bottom: 2rem;
    }
`;

const StackList = styled.div`
    width: 32rem;
`;

const DATA = ['React', 'React Native', 'Redux', 'Javascript', 'HTML5', 'CSS3', 'Firebase', 'Firestore', 'MongoDB'];

export default () => (
    <Wrapper>
        <StackList>
            {DATA.map((val, i) => (
                <StackItem key={i}>{val}</StackItem>
            ))}
        </StackList>
    </Wrapper>
)

