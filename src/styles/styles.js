import { createGlobalStyle } from "styled-components";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
    }
`;

export const SRoot = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

export const SPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;

    h1 {
        margin: 3rem;
        font-size: 3rem;
    }
`;

export const SHeader = styled.header`
    width: 10vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: black;
    text-align: center;
`;

export const SLink = styled(NavLink)`
    color: cyan;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0 1rem 0;
    padding: .5rem;
`;
