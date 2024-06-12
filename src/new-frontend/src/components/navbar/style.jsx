import {styled, createGlobalStyle} from 'styled-components';

export const Logo = styled.img`
    width: 10vw;
    height: 50%;
    margin-left: 2vw;
`;

export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #EA7221;
    width: 100%;
    height: 12vh;
`;

export const LinksDiv = styled.div`
    display: flex;
    flex-direction: space-between;
    align-items: center;
    margin-right: 2vw;
    gap: 1vw;
    font-family: 'Poppins', sans-serif;
`;

export const Link = styled.a`
    text-decoration: none;
    color: black;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

