import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: black;
    padding: 2rem 1rem 1rem 1rem;
    @media(max-width: 768px){
        flex-flow: wrap;
    }
`;

const FollowSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
`;

const Links = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    list-style: none;
`;

const Link = styled.span`
    color: rgb(144, 149, 161);
    font-weight: 100;
    font-size: .75rem;
`;

const Copyright = styled.span`
    color: rgb(144, 149, 161);
    font-size: .5rem;
    margin: 2rem 0 .5rem 0;
`;

export default () => (
    <Wrapper>
        <FollowSection>
            {/* <SectionHeaders>
                Leomar Amiel
            </SectionHeaders> */}
            <Links>
                <Link>
                    Facebook
                </Link>
                <Link>
                    Twitter
                </Link>
                <Link>
                    Instagram
                </Link>
                <Link>
                    LinkedIn
                </Link>
            </Links>
        </FollowSection>
        <Copyright>
            2018 Leomar Amiel
        </Copyright>
    </Wrapper>
)