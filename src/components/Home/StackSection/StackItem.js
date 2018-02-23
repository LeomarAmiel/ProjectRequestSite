import React from 'react';
import styled from 'styled-components';

const Item = styled.span`
    font-size: 0.8rem;
    display: inline-block;
    width: 33%;
    padding: 1rem 0 1rem .1rem;
    @media (max-width: 767px) {
        width: 40%;
    }
    font-weight: 600;
`;

export default (props) => (
    <Item>
        {props.children}
    </Item>
)